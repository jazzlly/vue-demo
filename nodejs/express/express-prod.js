"use strict";

// TODO: 处理异常

var _ = require('underscore')
var express = require('express');
var util = require('util')
var app = express();
var mysql = require('mysql');

const serverPort = 8888

const {es, esClient} = require('./Es')

var connection = mysql.createConnection({
  host     : '192.168.11.42',
  user     : 'root',
  password : 'pekall1234',
  database : 'mdm_reactor'
});

connection.connect();

/* key: orgId, value: defCodeReal */
const orgIdMap = new Map()

/* key: orgCode, value: defCodeReal */
const orgCodeMap = new Map()

connection.query('select id, org_code_real, def_code_real from mdm_org', 
        function (error, results) {
    if (error) throw error;

    // console.log(util.inspect(fields));
    // console.log(util.inspect(results[0]));

    results.forEach(row => {
      orgIdMap.set(row.id, row.def_code_real)
      orgCodeMap.set(row.org_code_real, row.def_code_real)
    })
    console.log("Read mysql org data done!");
});

/* key: account, value: org id of user */
const userAccountMap = new Map()

// 查询用户数据：
connection.query('select account, org_code from mdm_user', 
        function (error, results) {
    if (error) throw error;

    results.forEach(row => {
      userAccountMap.set(row.account, row.org_code)
    })
    console.log("Read mysql user data done!");
});

app.get('/org/def_code_by_id', async function (req, res) {
    const orgId = req.query.org_id
    console.log(`org id: ${orgId}`);
    
    res.send(orgIdMap.get(orgId))
})

app.get('/org/def_code_by_code', async function (req, res) {
    const orgCode = req.query.org_code
    console.log(`org code: ${orgCode}`);

    res.send(orgCodeMap.get(orgCode))
})

app.get('/user/def_code_by_account', async function (req, res) {
    const account = req.query.account
    console.log(`user account: ${account}`);
    
    const orgId = userAccountMap.get(account)
    if(orgId) {
        res.send(orgIdMap.get(orgId))
        return
    }
    res.status(404).send("def code not found!")
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

/**
 * 检查两个index内容是否相同
 * query: index1, index2
 */
app.get('/is_indices_equal', async function (req, res) {
    const index1 = req.query.index1
    const index2 = req.query.index2

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

    await scrollIndex2(index1, (hit) => {
        map2.set(hit._id, hit._source)
    })

    if(!compareMaps(map1, map2)) {
        res.send("Not equal!")
        return
    }

    res.send("OK!")
})


function compareMaps(map1, map2) {
    var testVal;
    if (map1.size !== map2.size) {
        console.log(`size not equal, size1: ${map1.size}, size2: ${map2.size}`);
        return false;
    }
    for (var [key, val] of map1) {
        testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (!_.isEqual(testVal, val)|| (testVal === undefined && !map2.has(key))) {
            console.log(`map1: ${key},  ${util.inspect(val)}`);
            console.log(`map2: ${key}, ${util.inspect(testVal)}`);
            return false;
        }
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