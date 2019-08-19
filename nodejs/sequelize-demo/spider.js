var cheerio = require('cheerio');
var fs = require('fs');
var XLSX = require('xlsx');

var endOfLine = require('os').EOL;

function createExcel2(data) {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(data);

    /* add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');

    /* write workbook */
    XLSX.writeFile(wb, 'write.xlsx');
}

const html = fs.readFileSync(
    '/Users/jiangrui/git/jiangrui/web/vue-demo/nodejs/sequelize-demo/linux.html',
    'utf8')

var $ = cheerio.load(html)

var rows = []
$('.que-block').each(function (i, el) {
    var row = []
    console.log(i);
    row.push(i + 1) // 0
    row.push('类型') // 1
    row.push('题型') // 2

    let question = ''
    const title = $(el).find('.panel-title').text().trim()
    const title_detail = $(el).find('.line-numbers').text().trim()
    if (title_detail) {
        console.log(title_detail);
        question = question.concat(title_detail)
    } else {
        console.log(title);
        question = question.concat(title)
    }

    let questionType = ''
    $(el).find('div[class=checkbox] label').each(function (i, el) {
        console.log($(el).text().trim());
        question = question.concat(endOfLine,
            $(el).text().trim())
        questionType = '多选题'
    })
    $(el).find('div[class=radio] label').each(function (i, el) {
        console.log($(el).text().trim().replace(/[\r\n]/g, "").replace(/ +/g, " "));
        question = question.concat(endOfLine,
            $(el).text().trim().replace(/[\r\n]/g, "").replace(/ +/g, " "))
        questionType = '单选题'
    })

    row[2] = questionType
    row.push(question)

    const answer = $(el).find('div[class=text-default]').filter(function (i, ele) {
        var lable = $(ele).children('label').text();
        return RegExp(/参考答案/).test(lable)
    }).text().trim().replace(/参考答案：/g, '')
    console.log(answer);

    console.log(questionType);
    row.push('难度')
    row.push(answer)

    rows.push(row)
})

createExcel2(rows)