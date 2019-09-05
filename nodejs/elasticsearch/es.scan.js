var util = require('util')

var esHost = '192.168.10.28:9200'

var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client({
    host: esHost,
    log: 'info'
});


const scoll = async function () {
    // start things off by searching, setting a scroll timeout, and pushing
    // our first response into the queue to be processed
    var response = await client.search({
        index: 'uni-auth-web-login-log-2019-08',
        scroll: '60s',
        body: {
            query: {
                range: {
                    createTime: {
                        gte: 1565539200000,
                        lte: 1565798400000
                    }
                }
            },
        }
    })

    do {
        const responseQueue = response.hits.hits
        // console.log(response.hits.hits);
        console.log("queue length: " + responseQueue.length);

        responseQueue.forEach((hit) => {
            // console.log(util.inspect(hit));
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
