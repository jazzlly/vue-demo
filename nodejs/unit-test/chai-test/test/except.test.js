const except = require('chai').expect

except(0).to.equal(0)
except(true).to.equal(true)
except(null).to.equal(null)
except(undefined).to.equal(undefined)

except(1).to.be.ok
except('foo').to.be.ok
except(true).to.be.ok
except({}).to.be.ok
except([]).to.be.ok

except(0).to.not.be.ok
except('').to.not.be.ok
except("").to.not.be.ok
except(false).to.not.be.ok
except(null).to.not.be.ok
except(undefined).to.not.be.ok

except(null).to.be.null
except(1).to.not.be.null
except(undefined).to.be.undefined
except(1).to.not.be.undefined

except([]).to.be.empty
except('').to.be.empty
except(new Set()).to.be.empty
except(new Map()).to.be.empty
except({}).to.be.empty
except([]).to.be.an('array')
    .that.is.empty

except([1, 2, 3]).to.have.lengthOf(3)
except([1, 2, 3]).to.not.be.empty // not recommended
except(new Set([1, 2, 3])).to.have.property('size', 3)

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
// console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
except(Object.keys(object1)).to.have.lengthOf(3)
except(Object.keys({a:1})).to.have.lengthOf(1)

/////////////////////////////////////////
// equal
/////////////////////////////////////////
except(1).to.equal(1)
except('foo').to.equal('foo')

// object deep eqaul
except({a:1}).to.not.equal({a:1})
except({a:1}).to.deep.equal({a:1})
except([1,2]).to.deep.equal([1,2])

except({a:1}).to.eql({a:1})
.but.not.equal({a:1})   // eql is deep.equal

except([1,2]).to.eql([1,2]).but.not.equal([1,2])

except({a:1}).to.have.property('a')
except({a:1}).to.have.property('a', 1)
except({x:{a:1}}).to.have.deep.property('x', {a:1})

Object.prototype.b = 2
except({a:1}).to.have.own.property('a')
except({a:1}).to.have.own.property('a', 1)
except({a:1}).to.have.property('b', 2)
except({a:1}).to.have.not.own.property('b', 2)

except({x:{a:1}}).to.have.own.deep.property('x', {a:1})

except({a: {b: ['foo', 'bar']}}).to.have.nested.property('a.b[0]', 'foo')
except({a: {b: ['foo', {c:3}]}})
    .to.have.nested.deep.property('a.b[1]', {c:3})

/////////////////////////////////////////
// include/includes 
/////////////////////////////////////////

// string
except('foobar').to.include('foo').and.include('bar')
// array
except([1, 2, 3]).to.include(1).and.include(2)
// set
except(new Set([1, 2])).to.include(1).and.include(2)
// map, include value
except(new Map([
    ['a', 1],
    ['b', 2]
])).to.include(2).and.include(1)
// object
except({
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
except([{
    a: 1
}]).to.deep.include({
    a: 1
}) // deep equal
except([{
    a: 1
}]).to.not.include({
    a: 1
}) // not deep equal

except({
    a: {
        b: 1
    }
}).to.deep.include({
    a: {
        b: 1
    }
}) // deep equal
except({
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
except({
    a: 1
}).to.own.include({
    a: 1
})
except({
        a: 1
    }).to.include({
        b: 2
    })
    .but.not.own.include({
        b: 2
    })

except({
    a: {
        b: 1
    }
}).to.own.deep.include({
    a: {
        b: 1
    }
})

except({
    a: {
        b: ['x', 'y']
    }
}).to.nested.include({
    'a.b[1]': 'y'
})
except({
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

except('foobar').to.not.include('wahaha')
except([1, 2, 3]).to.not.include(5)

// .a
except([]).to.be.an('array').that.is.empty
except([1, 2, 3]).to.be.an('array')
    .that.includes(2) // and is ok
    .and.includes(3)

except({
    a: 1
}).to.include.any.key(['a', 'b', 'c'])
except({
    a: 1
}).to.have.any.key(['a', 'b', 'c'])
// except({a:1}).to.include.any.key(['b','c'])   // not ok!