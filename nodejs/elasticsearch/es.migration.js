var esHostSrc = '192.168.10.197:9200'
var esHostDest = '192.168.11.90:9200'

var util = require('util')
var moment = require('moment')
const child_process = require("child_process");
var elasticsearch = require('elasticsearch')

// var argv = require('minimist')(process.argv.slice(2));
// console.log(argv);

var clientSrc = new elasticsearch.Client({
    host: esHostSrc,
    log: 'info'
});

var clientDest = new elasticsearch.Client({
    host: esHostDest,
    log: 'info'
});

var scroll = async function (index) {
    // start things off by searching, setting a scroll timeout, and pushing
    // our first response into the queue to be processed
    var response = await clientSrc.search({
        index: index,
        scroll: '60s',
        body: {
            "size": 1000,
        }
    })

    do {
        const responseQueue = response.hits.hits
        var body = []
        responseQueue.forEach(function (hit) {
            // console.log(util.inspect(hit));
            body.push({
                index: {
                    _index: hit._index,
                    _type: hit._type,
                    _id: hit._id,

                }
            }, hit._source)
        })

        if (body.length > 0) {
            console.log(`index ${index}, bulk size: ${body.length}`)
            todoCount -= body.length
            todoSeconds = todoCount / 1000
            console.log("")
            console.log(`todo count: ${todoCount} ...`)
            console.log(`todo time: ${moment.duration(todoSeconds, 'seconds').humanize()} ...`)
            console.log('')

            var bulkResp = await clientDest.bulk({
                body: body
            })
            if (bulkResp.errors !== false) {
                console.log('we got errors when bulk!')
                process.exit()
            }
            // console.log("sleep ...")
            child_process.execSync("sleep 1")
        }

        response = await clientSrc.scroll({
            scrollId: response._scroll_id,
            scroll: '60s'
        })
    } while (response.hits.hits.length);
}

// 统计数据：
// 源es中有多少条index
var totalCount = 0
// 已经迁移了多少条index
var migrateCount = 0
// 还需要迁移多少条index
var todoCount = 0

// 还需要多长时间
var todoSeconds = 0

async function initMetrix(indices) {
    for (let i = 0; i < indices.length; i++) {
        const {
            count
        } = await clientSrc.count({
            index: indices[i]
        });
        totalCount += count
    }

    console.log(`totalCount is: ${totalCount}`)
    todoCount = totalCount
    todoSeconds = totalCount / 1000
    console.log(
        `todo, count: ${totalCount}, time:  ${moment.duration(todoSeconds, 'seconds').humanize()}`)
}

var run = async function () {
    const health = await clientSrc.cat.health({});
    if (!health.includes('yellow') && !health.includes('green')) {
        console.log('es not ok!')
        console.log(health)
        process.exit()
    }

    const indicesText = await clientSrc.cat.indices()
    var indices = []
    var lines = indicesText.split(/\r?\n/)
    lines.forEach(function (data) {
        var tokens = data.split(/ +/)
        if (tokens[2]) {
            console.log(tokens[2])
            indices.push(tokens[2])
        }
    })
    console.log('indices')
    console.log(indices)

    await initMetrix(indices)

    for (let i = 0; i < indices.length; i++) {
        await scroll(indices[i])
    }
}

run()