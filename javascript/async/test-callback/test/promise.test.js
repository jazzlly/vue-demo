var calcSquarePromise = require('../promise-error')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

// 两种方式是一样的！
// const except = require('chai').expect
const expect = chai.expect

describe('chai as promised test', function() {
    this.timeout(4000)  // 设置case运行的超时，默认为2000ms
                        // 可以放在describe 或 it中

    it('calc multi expect', function() {
        return calcSquarePromise(2).then(function(result) {
            expect(result).to.be.above(3)
            expect(result).to.be.equal(4)
        })
    })

    it('calc timeout', function() {
        // this.timeout(4000)
        return expect(calcSquarePromise(2)).to.be.eventually.fulfilled
    })

    it('calc fulfilled with return', function() {
        // return 和 done的语义一样
        return expect(calcSquarePromise(2)).to.be.fulfilled
    })

    it('calc fulfilled with done', function(done) {
        expect(calcSquarePromise(2)).to.be.fulfilled.notify(done)
    })

    it('calc rejected with return', function() {
        // return 和 done的语义一样
        return expect(calcSquarePromise('xxx')).to.be.rejected
    })

    it('calc rejected with done', function(done) {
        // return 和 done的语义一样
        expect(calcSquarePromise('xxx')).to.be.rejected.notify(done)
    })

    it("calc promise", function(done) {
        expect(Promise.resolve({ foo: "bar" }))
            .to.eventually.have.property("foo")
        expect(Promise.resolve({ foo: "bar" }))
            .to.eventually.deep.equal({foo:"bar"})

        expect(calcSquarePromise(2))
            .to.eventually.be.equal(4).notify(done)
    })

    it("calc promise error", function () {
        return calcSquarePromise('xxx').catch(function (err) {
            expect(err).to.not.be.null
            expect(err.message).to.equal('Argument of type number is excepted!')
        })
    })
})


describe("calc square promise test suit!", function () {
    // For test Callback:
    // MUST pass function 'done' to it function
    // AND call 'done()' after callback done!
    it("square of 2 is 4!", function (done) {
        const p = calcSquarePromise(2)
        p.then(function (value) {
            expect(value).to.be.equal(4)
            done()
        }, function (reason) {
            console.log(`error reason ${reason}!`);
            done()
        })
    })

    it("should get error if first param is String", function (done) {
        const p = calcSquarePromise('xxx')
        p.then(function (value) {
            console.log(`value is: ${value}`);
        }, function (error) {
            console.log(`got err xxx: ${error}`);

            expect(err).to.not.be.null
            expect(err.message).to.equal('Argument of type number is excepted!')
            expect(result).to.be.undefined
            done()
        }).catch(function (err) {
            console.log(`err is :${err}`);
            // console.log(`got error: ${err}`);
            // except(err).to.not.be.null
            // except(err.message).to.equal('Argument of type number is excepted!')
            // except(result).to.be.undefined
            done()
        })

        it("should get error if first param is String", function (done) {
            const p = calcSquarePromise(2)
            p.then(function (value) {
                console.log(`value is: ${value}`);
            }, function (error) {
                console.log(`got err xxx: ${error}`);

                expect(err).to.not.be.null
                expect(err.message).to.equal('Argument of type number is excepted!')
                expect(result).to.be.undefined
                done()
            }).catch(function (err) {
                console.log(`err is :${err}`);
                // console.log(`got error: ${err}`);
                // except(err).to.not.be.null
                // except(err.message).to.equal('Argument of type number is excepted!')
                // except(result).to.be.undefined
                done()
            })
        })

        it("square of 2 is 4!", function (done) {
            const p = calcSquarePromise(2)
            p.then(function (value) {
                // except(value).to.be.equal(4)   
                return calcSquarePromise(value) // 
            }).then(function (value) {
                expect(value).to.be.equal(16)
                done()
            })
        })
    })
})