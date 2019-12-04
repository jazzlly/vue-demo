var util = require('util')
const Sequelize = require('sequelize');
let XLSX = require('xlsx');

var workbook = XLSX.utils.book_new();

const sequelize = new Sequelize('mdm_reactor', 'root', 'pekall1234', {
    host: '192.168.10.28', // mdm mysql服务地址
    dialect: 'mysql'
});

// es地址
const esHost = '192.168.10.28:9200'

var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client({
    host: esHost,
    log: 'info'
});

let deviceMap = {}
deviceMap["deviceCount"] = 0

// key: org def_code_real, object: org
let orgMap = {}

/**
 * 将数据添加到excel sheet
 * @param {sheet名称} sheetName 
 * @param {二维数组} data 
 */
function appendDataToSheet(sheetName, data) {
    console.log(`sheetName: ${sheetName}`);
    if (sheetName.length > 31) {
        sheetName = sheetName.substring(0, 31)
    }

    var ws = XLSX.utils.aoa_to_sheet(data);
    /* add worksheet to workbook */
    XLSX.utils.book_append_sheet(workbook, ws, sheetName);
}

const scoll = async function () {
    await sequelize.authenticate()
    await sequelize.query("drop table if exists mdm_org_temp")
    await sequelize.query("create table mdm_org_temp as select a.def_code_real par_code, a.abbreviation par_abb, b.def_code_real ,b.abbreviation abb, b.id id from  (select def_code_real, abbreviation from mdm_org ) a, ( select substr(def_code_real,1,48) par, def_code_real, abbreviation ,id from mdm_org  order by def_code_real) b where a.def_code_real = b.par")

    const mdm_org_temp = await sequelize.query("select abb, def_code_real, par_code, par_abb from mdm_org_temp")
    mdm_org_temp.forEach(row => {
        // console.log('Get row:');
        row.forEach(element => {
            // console.log('Get element:');
            // console.log(element.abb)
            // console.log(element.def_code_real)
            // console.log(element.par_abb)
            // console.log(element.par_code)

            orgMap[element.def_code_real] = {
                "def_code_real": element.def_code_real,
                "abb": element.abb,
                "par_abb": element.par_abb,
                "par_code": element.par_code
            }
        });
    })

    // start things off by searching, setting a scroll timeout, and pushing
    // our first response into the queue to be processed
    var response = await client.search({
        index: 'pekall-dev-app-log-2019-09',
        scroll: '60s',
        // body: {
        //     query: {
        //         range: {
        //             createTime: {
        //                 gte: 0,
        //                 lte: 565798400000
        //             }
        //         }
        //     },
        // }
    })

    do {
        const responseQueue = response.hits.hits
        // console.log(response.hits.hits);
        // console.log("queue length: " + responseQueue.length);

        responseQueue.forEach((hit) => {
            // console.log(util.inspect(hit));
            // console.log("_source is: ");
            // console.log(util.inspect(hit._source));

            let source = hit._source
            let entity = deviceMap[source.deviceUuid]
            if (entity === undefined || entity === null) {
                entity = {
                    deviceUuid: source.deviceUuid,
                    deviceName: source.deviceName,
                    appInfos: {}
                }
                deviceMap[source.deviceUuid] = entity
                deviceMap["deviceCount"] += 1
            }

            let app = entity["appInfos"][source.appPackageName]
            if (app === undefined || app === null) {
                app = {
                    area: orgMap[source.orgDefCode].par_abb,
                    orgName: source.orgName,
                    orgId: source.orgId,
                    orgDefCode: source.orgDefCode,
                    userName: source.userName,
                    idNum: source.idNum,
                    deviceName: source.deviceName,
                    appName: source.appName,
                    appPackageName: source.appPackageName,
                    useCount: 0,
                    durationTotal: 0,
                    trafficTotal: 0
                }
                entity["appInfos"][source.appPackageName] = app
            }
            app["useCount"] += 1
            app["durationTotal"] = app["durationTotal"] + source.duration
            app["trafficTotal"] = app["trafficTotal"] + source.dataTraffic
        })

        response = await client.scroll({
            scrollId: response._scroll_id,
            scroll: '30s'
        })
    } while (response.hits.hits.length);

    console.log("device map is: ")
    // console.log(JSON.stringify(deviceMap))

    let data = []
    // 添加excel header
    data.push(["地市", "机构名称", "姓名", "身份证号", "设备名称", "应用名称", "使用次数", "使用时长", "使用流量"])
    for (let [key, value] of Object.entries(deviceMap)) {

        if (key === 'deviceCount') {
            continue
        }

        // value是一个device object
        for (let [key1, value1] of Object.entries(value)) {
            if (key1 === 'appInfos') {
                // value1是 appInfos 对象
                for (let [key2, value2] of Object.entries(value1)) {
                    console.log(value2)
                    let row = []
                    row.push(value2["area"])
                    row.push(value2["orgName"])
                    row.push(value2["userName"])
                    row.push(value2["idNum"])
                    row.push(value2["deviceName"])
                    row.push(value2["appName"])
                    row.push(value2["useCount"])
                    row.push(value2["durationTotal"])
                    row.push(value2["trafficTotal"])
                    data.push(row)
                }
            }
        }
    }

    appendDataToSheet('usage', data)
    XLSX.writeFile(workbook, `app_usage.xlsx`);

    await sequelize.close()

}

scoll()