const expect = require('chai').expect

expect(0).to.equal(0)
expect(true).to.equal(true)
expect(null).to.equal(null)
expect(undefined).to.equal(undefined)

expect(1).to.be.ok
expect('foo').to.be.ok
expect(true).to.be.ok
expect({}).to.be.ok
expect([]).to.be.ok

expect(0).to.not.be.ok
expect('').to.not.be.ok
expect("").to.not.be.ok
expect(false).to.not.be.ok
expect(null).to.not.be.ok
expect(undefined).to.not.be.ok

expect(null).to.be.null
expect(1).to.not.be.null
expect(undefined).to.be.undefined
expect(1).to.not.be.undefined

expect([]).to.be.empty
expect('').to.be.empty
expect(new Set()).to.be.empty
expect(new Map()).to.be.empty
expect({}).to.be.empty
expect([]).to.be.an('array')
    .that.is.empty

expect([1, 2, 3]).to.have.lengthOf(3)
expect([1, 2, 3]).to.not.be.empty // not recommended
expect(new Set([1, 2, 3])).to.have.property('size', 3)

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
// console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
expect(Object.keys(object1)).to.have.lengthOf(3)
expect(Object.keys({a:1})).to.have.lengthOf(1)

/////////////////////////////////////////
// equal
/////////////////////////////////////////
expect(1).to.equal(1)
expect('foo').to.equal('foo')

// object deep eqaul
expect({a:1}).to.not.equal({a:1})
expect({a:1}).to.deep.equal({a:1})
expect([1,2]).to.deep.equal([1,2])

 // eql is deep.equal
expect({a:1}).to.eql({a:1})
    .but.not.equal({a:1})  

expect([1,2]).to.eql([1,2]).but.not.equal([1,2])

expect({a:1}).to.have.property('a')
expect({a:1}).to.have.property('a', 1)
expect({x:{a:1}}).to.have.deep.property('x', {a:1})

Object.prototype.b = 2
expect({a:1}).to.have.own.property('a')
expect({a:1}).to.have.own.property('a', 1)
expect({a:1}).to.have.property('b', 2)
expect({a:1}).to.have.not.own.property('b', 2)

expect({x:{a:1}}).to.have.own.deep.property('x', {a:1})

expect({a: {b: ['foo', 'bar']}}).to.have.nested.property('a.b[0]', 'foo')
expect({a: {b: ['foo', {c:3}]}})
    .to.have.nested.deep.property('a.b[1]', {c:3})

/////////////////////////////////////////
// include/includes 
/////////////////////////////////////////

// string
expect('foobar').to.include('foo').and.include('bar')
// array
expect([1, 2, 3]).to.include(1).and.include(2)
// set
expect(new Set([1, 2])).to.include(1).and.include(2)
// map, include value
expect(new Map([
    ['a', 1],
    ['b', 2]
])).to.include(2).and.include(1)
// object
expect({
    a: 1,
    b: 2,
    c: 3
}).to.include({
    a: 1,
    c: 3
}).and.include({
    b: 2
})

// array of object
expect([{
    a: 1
}]).to.deep.include({
    a: 1
}) // deep equal
expect([{
    a: 1
}]).to.not.include({
    a: 1
}) // not deep equal

expect({
    a: {
        b: 1
    }
}).to.deep.include({
    a: {
        b: 1
    }
}) // deep equal
expect({
    a: {
        b: 1
    }
}).to.not.include({
    a: {
        b: 1
    }
}) // not deep equal

// prototype
Object.prototype.b = 2
expect({
    a: 1
}).to.own.include({
    a: 1
})
expect({
        a: 1
    }).to.include({
        b: 2
    })
    .but.not.own.include({
        b: 2
    })

expect({
    a: {
        b: 1
    }
}).to.own.deep.include({
    a: {
        b: 1
    }
})

expect({
    a: {
        b: ['x', 'y']
    }
}).to.nested.include({
    'a.b[1]': 'y'
})
expect({
    a: {
        b: [{
            c: 3
        }]
    }
}).to.nested.deep.include({
    'a.b[0]': {
        c: 3
    }
})

expect('foobar').to.not.include('wahaha')
expect([1, 2, 3]).to.not.include(5)

// .a
expect([]).to.be.an('array').that.is.empty
expect([1, 2, 3]).to.be.an('array')
    .that.includes(2) // and is ok
    .and.includes(3)

expect({
    a: 1
}).to.include.any.key(['a', 'b', 'c'])
expect({
    a: 1
}).to.have.any.key(['a', 'b', 'c'])
// except({a:1}).to.include.any.key(['b','c'])   // not ok!