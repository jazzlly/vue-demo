"use strict";

// TODO: 处理异常
var elasticsearch = require('elasticsearch')

const esHost = '192.168.11.42:9200'
const esClient = new elasticsearch.Client({
    host: esHost,
    log: 'trace'
});

var Es = function() {}

Es.prototype.isEsIndexExist = async function(index) {
    return await esClient.indices.exists({
        index: index
    })
}

Es.prototype.indexCount = async function(index) {
    /* schema for count
    {
        "count": 10000,
        "_shards": {
            "total": 5,
            "successful": 5,
            "failed": 0
        }
    }*/
    const resp = await esClient.count({
        index: index
    });
    return resp.count
}

Es.prototype.createEsIndex = async function(index) {
    console.log("create index: " + index + ", begin ...");

    await esClient.indices.create({
        index: index
    })
    console.log("create index: " + index + ", done!");
}

Es.prototype.deleteEsIndex = async function(index) {
    console.log("delete index: " + index + ", begin ...");

    await esClient.indices.delete({
        index: index,
    })

    console.log("delete index: " + index + ", done!");
}

exports.es = new Es()
exports.esClient = esClient
