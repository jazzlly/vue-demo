"use strict";
var expect = require("chai").expect;
var _ = require('lodash')


function objectDemo() {
    var p1 = new Object()
    p1.name = 'tom'
    p1.age = 35

    console.log(p1);

    var p2 = {
        name: 'jerry',
        age: 32
    }
    console.log(p2);

    // 创建对象时，不写new 也是可以的
    var p3 = Object()
    p3.name = 'chale'
    p3.age = 83
    console.log(p3);

    var p4 = {} // 空对象
}

// objectDemo()

function arrayDemo() {
    var a1 = new Array(1) // 创建长度为1的array
    var a2 = new Array('foo', 'bar', 'wo', 'wa')
    console.log(a2);

    var a3 = Array('wuheihei', 'wahaha')
    console.log(a3);

    var empty = []
    var colors = ['red', 'blue', 'yellow']
    colors[1] = 'pink'
    console.log(colors[1]);
    console.log(colors);
    console.log(colors.length)

    function arrayMethod() {
        // 检测对象是否是数组
        var isArray = Array.isArray(colors)
        console.log('colors is array: ' + isArray)

        // 转换方法
        console.log('colors.toString: ' + colors.toString());
        console.log('colors.valueof: ' + colors.valueOf());
        console.log('colors.toLocaleString: ' + colors.toLocaleString());

        // join
        console.log('join by ,: ' + colors.join(','));
        console.log('join by ||: ' + colors.join('||'));
    }
    // arrayMethod()

    function arrayStackMethod() {
        console.log('enter arrayStackMethod ...');

        var colors =[]

        // push从数组尾部插入元素
        colors.push('red')
        expect(colors.length).to.be.eql(1)
        expect(colors[0]).to.be.equal('red')
        
        // push从数组尾部插入元素
        colors.push('blue')
        expect(colors.length).to.be.eql(2)
        expect(colors[0]).to.be.equal('red')
        expect(colors[1]).to.be.equal('blue')
        
        // pop从数组尾部弹出元素
        var foo = colors.pop()
        expect(foo).to.be.equal('blue')
        expect(colors.length).to.be.eql(1)
    }
    arrayStackMethod()

    function arrayFifoMethod() {
        console.log('enter arrayFifoMethod ...');
        
        var colors =[]
        colors.push('red')
        expect(colors.length).to.be.eql(1)
        expect(colors[0]).to.be.equal('red')
        
        colors.push('blue')
        expect(colors.length).to.be.eql(2)
        expect(colors[0]).to.be.equal('red')
        expect(colors[1]).to.be.equal('blue')
        
        var foo = colors.shift()
        expect(foo).to.be.equal('red')
        expect(colors.length).to.be.eql(1)

        // unshift从数组头部插入元素
        colors.unshift('black')
        expect(colors.length).to.be.eql(2)
        expect(colors[0]).to.be.equal('black')
        expect(colors[1]).to.be.equal('blue')

        var foo = []
        foo.unshift(1,2)  // 将[1, 2]一起插入到队列头部，1,2之间的顺序不变
        expect(foo[0]).to.be.equal(1)
        expect(foo[1]).to.be.equal(2)

        var bar = []
        bar.unshift(1)
        bar.unshift(2)
        expect(bar[0]).to.be.equal(2)
        expect(bar[1]).to.be.equal(1)
    }
    arrayFifoMethod()

    function arrayOrder() {
        let foo = [1, 2, 3, 4, 5]
        foo.reverse()
        expect(foo).to.be.deep.equal([ 5, 4, 3, 2, 1 ])

        let bar = [3 , 2, 5, 4, 1]
        bar.sort()
        expect(bar).to.be.deep.equal([1, 2, 3, 4, 5])

        bar.sort((a, b) => {
            if (a === b) {
                return 0
            } else if (a < b) {
                return 1
            } else {
                return -1
            }

        })
        expect(bar).to.be.deep.equal([ 5, 4, 3, 2, 1 ])
    }
    arrayOrder()
}

arrayDemo()