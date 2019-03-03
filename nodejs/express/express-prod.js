"use strict";

// TODO: 处理异常

var _ = require('underscore')
var express = require('express');
var util = require('util')
var app = express();

const serverPort = 8888

const {
    es,
    esClient
} = require('./Es')
var mdmService = require('./mdmService')

app.get('/org/def_code_by_id', async function (req, res) {
    const orgId = req.query.org_id
    console.log(`org id: ${orgId}`);

    res.send(mdmService.defCodeByOrgId(orgId))
})

app.get('/org/def_code_by_code', async function (req, res) {
    const orgCode = req.query.org_code
    console.log(`org code: ${orgCode}`);

    res.send(mdmService.defCodeByOrgCode(orgCode))
})

app.get('/user/def_code_by_account', async function (req, res) {
    const account = req.query.account
    console.log(`user account: ${account}`);

    res.send(mdmService.defCodeByAccount(account))
})

/** 
 * 查询index是否存在
 * query: index
 */
app.get('/index_exist', async function (req, res) {
    const esIndex = req.query.index
    console.log('es index: ' + esIndex);

    const exist = await es.isEsIndexExist(esIndex)
    res.send(exist)
})

/**
 * 获取index document数量
 * query: index
 */
app.get('/index_count', async function (req, res) {
    const index = req.query.index
    console.log('es index: ' + index);
    if (!await es.isEsIndexExist(index)) {
        res.status(404).send("Es index not found!")
        return
    }

    const count = await es.indexCount(index)
    res.send(new String(count))
})

/**
 * 创建index
 * query: index
 */
app.get('/create_index', async function (req, res) {
    const esIndex = req.query.index
    console.log('es index: ' + esIndex);

    if (await es.isEsIndexExist(esIndex)) {
        console.log('es index: ' + esIndex + " already created!");
        res.status(400).send("Es index already created!")
        return
    }

    await es.createEsIndex(esIndex)
    res.send("Index: " + esIndex + " created!")
})

/**
 * 删除index
 * query: index
 */
app.get('/delete_index', async function (req, res) {
    const esIndex = req.query.index
    console.log('es index: ' + esIndex);
    if (!await es.isEsIndexExist(esIndex)) {
        res.status(404).send("Es index not found!")
        return
    }

    await es.deleteEsIndex(esIndex)
    res.send("Index: " + esIndex + " delete!!")
})

/**
 * 备份es index
 * query: index
 */
app.get('/backup_index', async function (req, res) {
    const esIndex = req.query.index
    console.log('es index: ' + esIndex);

    if (!await es.isEsIndexExist(esIndex)) {
        res.status(404).send("Es index not found!")
        return
    }

    const backupIndex = esIndex + '-bak'
    if (await es.isEsIndexExist(backupIndex)) {
        console.log("delete backup index: " + backupIndex)
        await es.deleteEsIndex(backupIndex);
    }

    console.log("es index exist, continue...");

    await scrollIndex(esIndex, (hit) => {
        console.log("log hit!");
        console.log(hit);
    })

    res.send("Back done!")
})

app.get('/add_def_code_for_index', async function (req, res) {
    const esIndex = req.query.index
    console.log('es index: ' + esIndex);

    if (!await es.isEsIndexExist(esIndex)) {
        res.status(404).send("Es index not found!")
        return
    }

    await scrollIndexAddDefOrgCode(esIndex)

    res.send("Back done!")
})

app.get('/check_def_code_for_index', async function (req, res) {
    const esIndex = req.query.index
    console.log('es index: ' + esIndex);

    if (!await es.isEsIndexExist(esIndex)) {
        res.status(404).send("Es index not found!")
        return
    }

    var list = []
    await scrollIndex2(esIndex, (hit) => {
        const defCodeReal = getDefCodeReal(hit)
        if (defCodeReal) {
            if (hit._source.defCodeReal &&
                hit._source.defCodeReal === defCodeReal) {
            } else {
                console.log(`defCodeReal: ${defCodeReal}`)
                console.log(`hist: ${util.inspect(hit)}`)
                list.push(hit)
            }
        }
    })

    if (list.length > 0) {
        // list.forEach((li) => {
        //     console.log(li);
        // })
        res.status(500).send("Not valid!")
        return
    }

    res.send("Valid!")
})

/**
 * 检查两个index内容是否相同
 * query: index1, index2
 */
app.get('/is_indices_equal', async function (req, res) {
    const index1 = req.query.index1
    const index2 = req.query.index2
    const skip = req.query.skip

    if (!await es.isEsIndexExist(index1)) {
        res.status(404).send(`index ${inde1} not found!`)
        return
    }
    if (!await es.isEsIndexExist(index2)) {
        res.status(404).send(`index ${index2} not found!`)
        return
    }

    const count1 = await es.indexCount(index1)
    const count2 = await es.indexCount(index2)
    if (count1 !== count2) {
        res.send(`Count not eqaul, index1 count: ${count1}, index2 count: ${count2}`)
        return
    }

    const map1 = new Map()
    const map2 = new Map()

    await scrollIndex2(index1, (hit) => {
        map1.set(hit._id, hit._source)
    })

    await scrollIndex2(index2, (hit) => {
        map2.set(hit._id, hit._source)
    })

    if (!compareMaps(map1, map2, skip)) {
        res.send("Not equal!")
        return
    }

    res.send("OK!")
})


function compareMaps(map1, map2, ignoreKey) {
    var testVal;
    if (map1.size !== map2.size) {
        console.log(`size not equal, size1: ${map1.size}, size2: ${map2.size}`);
        return false;
    }
    for (var [key, val] of map1) {
        testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        // if (ignoreKey) {
        //     console.log(`ignore key: ${ignoreKey}`)
        //     if (_.isEqual(
        //         _.omit(testVal, [ignoreKey]),
        //         _.omit(val), [ignoreKey])) {
        //         continue
        //     } else {
        //         return false
        //     }
        // } else {
        //     if (!_.isEqual(testVal, val) || (testVal === undefined && !map2.has(key))) {
        //         console.log(`map1: ${key},  ${util.inspect(val)}`);
        //         console.log(`map2: ${key}, ${util.inspect(testVal)}`);
        //         return false;
        //     }
        // }
        
        if (!_.isEqual(testVal, val) || (testVal === undefined && !map2.has(key))) {
            console.log(`map1: ${key},  ${util.inspect(val)}`);
            console.log(`map2: ${key}, ${util.inspect(testVal)}`);
            return false;
        }
        // console.log(`value1: ${util.inspect(val)}`)
        // console.log(`value2: ${util.inspect(testVal)}`)
    }
    return true;
}

var server = app.listen(serverPort, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})


async function scrollIndex(esIndex, scrollCallback) {

    var response = await esClient.search({
        index: esIndex,
        scroll: '30s'
    })

    /* resp的schema:
    resp: { 
        _scroll_id:'foo',
        took: 3,
        timed_out: false,
        _shards: { total: 5, successful: 5, failed: 0 },
        hits:
        { total: 356853,
            max_score: 1,
            hits:
            [ [Object],
                [Object], ... 
            ] 
        } 
    }
    */
    do {
        const responseQueue = response.hits.hits
        var body = []
        responseQueue.forEach((hit) => {
            /* schema for hit
            { _index: 'scbilling-app-action-2018-11',
                _type: 'doc',
                _id: 'ff80808167330e6e01673442caa30002:app36428779',
                _score: 1,
                _source:
                { id: 'ff80808167330e6e01673442caa30002:app36428779',
                    appId: 'ff80808167330e6e01673442caa30002',
                    appName: 'A4',
                    ...
                    } }
            */
            body.push({
                index: {
                    _index: hit._index + "-bak",
                    _type: hit._type,
                    _id: hit._id
                }
            }, )
            body.push(
                hit._source
            )

            // todo: skip callback!
            // scrollCallback(hit);
        })

        // console.log("bulk body is: " + body);
        await esClient.bulk({
            body: body,
            timeout: '1m'
        });

        response = await esClient.scroll({
            scrollId: response._scroll_id,
            scroll: '30s'
        })
    } while (response.hits.hits.length);
}

async function scrollIndexAddDefOrgCode(esIndex) {

    var response = await esClient.search({
        index: esIndex,
        scroll: '30s'
    })

    /* resp的schema:
    resp: { 
        _scroll_id:'foo',
        took: 3,
        timed_out: false,
        _shards: { total: 5, successful: 5, failed: 0 },
        hits:
        { total: 356853,
            max_score: 1,
            hits:
            [ [Object],
                [Object], ... 
            ] 
        } 
    }
    */

    do {
        const responseQueue = response.hits.hits
        var body = []
        responseQueue.forEach((hit) => {
            /* schema for hit
              { _index: 'scbilling-app-action-2018-11',
                _type: 'doc',
                _id: 'ff80808167330e6e01673442caa30002:app36428779',
                _score: 1,
                _source:
                { id: 'ff80808167330e6e01673442caa30002:app36428779',
                    appId: 'ff80808167330e6e01673442caa30002',
                    appName: 'A4',
                    ...
                    } }
            */

            const defCodeReal = getDefCodeReal(hit)
            if (defCodeReal && defCodeReal !== '') {
                body.push({
                    update: {
                        _index: hit._index,
                        _type: hit._type,
                        _id: hit._id
                    }
                }, )
                body.push({
                    doc: {
                        defCodeReal: defCodeReal
                    }
                })
            }
        })

        // console.log("bulk body is: " + body);
        if (body.length > 0) {
            await esClient.bulk({
                body: body,
                timeout: '1m'
            });
        }

        response = await esClient.scroll({
            scrollId: response._scroll_id,
            scroll: '30s'
        })
    } while (response.hits.hits.length);
}


async function scrollIndex2(esIndex, scrollCallback) {

    var response = await esClient.search({
        index: esIndex,
        scroll: '30s'
    })

    /* resp的schema:
    resp: { 
        _scroll_id:'foo',
        took: 3,
        timed_out: false,
        _shards: { total: 5, successful: 5, failed: 0 },
        hits:
        { total: 356853,
            max_score: 1,
            hits:
            [ [Object],
                [Object], ... 
            ] 
        } 
    }
    */

    do {
        const responseQueue = response.hits.hits
        responseQueue.forEach((hit) => {
            /* schema for hit
            { _index: 'scbilling-app-action-2018-11',
                _type: 'doc',
                _id: 'ff80808167330e6e01673442caa30002:app36428779',
                _score: 1,
                _source:
                { id: 'ff80808167330e6e01673442caa30002:app36428779',
                    appId: 'ff80808167330e6e01673442caa30002',
                    appName: 'A4',
                    ...
                    } }
            */
            scrollCallback(hit);
        })

        response = await esClient.scroll({
            scrollId: response._scroll_id,
            scroll: '30s'
        })
    } while (response.hits.hits.length);
}

function getDefCodeReal(hit) {
    var defCodeReal = null
    if (hit._index.includes('pekall-mdm-admin-log-') ||
        hit._index.includes('pekall-mdm-dev-log-')) {
        defCodeReal = mdmService.defCodeByOrgId(hit._source.operatorOrgCode)
    } else if (hit._index.includes('uni-auth-dev-login-log-')) {
        defCodeReal = mdmService.defCodeByAccount(hit._source.account)
    } else if (hit._index.includes('pekall-dev-app-log-')) {
        defCodeReal = mdmService.defCodeByOrgCode(hit._source.orgCode)
    }
    return defCodeReal
}