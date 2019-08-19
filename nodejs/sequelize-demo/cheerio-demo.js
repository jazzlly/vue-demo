const html = `
<ul id="fruits">
    <li class="apple">Apple</li> 
    <li class="orange">Orange</li> 
    <li class="pear">Pear</li> 
    </ul>
`

console.log(html);
const cheerio = require('cheerio');
const $ = cheerio.load(html)
console.log($('.apple', '#fruits').text())
console.log($('ul .apple').text());
console.log($('.apple').text());

console.log($('.pear').attr('class'))

$('ul li').each(function (i, ele) {
    console.log(i);
    console.log($(ele).text());
})

// console.log($('#fruits').find('li').length)
console.log($('.apple').nextAll('.pear').text())