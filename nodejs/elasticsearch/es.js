var util = require('util')
var await = require('await')

var esHost = '192.168.11.90:9200'

var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client({
    host: esHost,
    log: 'trace'
});

client.ping({
    requestTimeout: 1000,
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});

client.cat.health({}, function (error, resp) {
    console.log('resp')
    console.log(typeof (resp))
    console.log(resp)
    // todo: 如果resp里面没有yellow 或green, 则直接退出node程序
})

client.cat.indices({}, function (error, resp) {
    var indices = []
    var lines = resp.split(/\r?\n/)
    lines.forEach(function (data) {
        var tokens = data.split(/ +/)
        if (tokens[2]) {
            console.log(tokens[2])
            indices.push(tokens[2])
        }
    })
    console.log('indices')
    console.log(indices)
})


// todo: test count of each indices
client.count({
    index: 'foowaa'
}, function (error, resp) {
    console.log(`resp is`)
    console.log(resp)
});


// client.search({
//     index: 'scbilling-app-action-2018-11',
// }).then(function (body) {
//     var hits = body.hits.hits;
//     console.log(util.isArray(hits))
//     console.log(hits)
// }, function (error) {
//     console.trace(error.message);
// });

/*
console.log('cat indices');
client.cat.indices(function (err, response, status) {
    console.log(typeof (response))
    console.log(response)
})
*/

const scoll = async function () {
    // start things off by searching, setting a scroll timeout, and pushing
    // our first response into the queue to be processed
    var response = await client.search({
        index: 'scbilling-app-action-2018-11',
        scroll: '30s'
    })

    do {
        // console.log(response.hits.hits);
        // console.log("queue length: " + responseQueue.length);
        const responseQueue = response.hits.hits

        responseQueue.forEach((hit) => {
            console.log(util.inspect(hit));
            console.log("_source is: ");
            console.log(util.inspect(hit._source));
        })

        response = await client.scroll({
            scrollId: response._scroll_id,
            scroll: '30s'
        })
    } while (response.hits.hits.length);
}

scoll()