var express = require('express');
var util = require('util')
var app = express();
var elasticsearch = require('elasticsearch')

const esHost = '192.168.11.90:9200'
const esClient = new elasticsearch.Client({
    host: esHost,
    log: 'info'
});

// simple get
app.get('/test', function (req, res) {
    // console.log("request: " + util.inspect(req));
    res.send('Hello Test');
})

// get query params
app.get('/get_query', function (req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/index_exist', async function (req, res) {
    const esIndex = req.query.index
    console.log('es index: ' + esIndex);
    const exist = await isEsIndexExist(esIndex)
    res.send(exist)
})
// todo: wrap exception!
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016

// get query params
app.get('/es_index_backup', async function (req, res) {
    // 输出 JSON 格式
    const esIndex = req.query.index
    console.log('es index: ' + esIndex);


    // const exist = await scollEsIndex(esIndex)
    // console.log('back up begin!');

    return "backup begin!"
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

async function isEsIndexExist(index) {
    return esClient.indices.exists({
        index: index
    })
    /*
    esClient.indices.exists(
        {
            index: esIndex
        }
    ).then((indexExists) => {
        console.log("index: " + esIndex + " exists: " + indexExists);
        res.send(indexExists);
    }).catch((error) => {
        console.log("error: " + error);
        res.send(error);
    })
    */
}

const scollEsIndex = async function (esIndex) {
    // start things off by searching, setting a scroll timeout, and pushing
    // our first response into the queue to be processed
    var response = await client.search({
        index: esIndex,
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
