const calcSquare = require('../callback-error').foo
const calcSquarePromise = require('../callback-error').calcSquarePromise

const except = require('chai').expect

describe("calc square test suit!", function() {

    // For test Callback:
    // MUST pass function 'done' to it function
    // AND call 'done()' after callback done!
    it("square of 2 is 4!", function(done) {
        calcSquare(2, function(err, result) {
            console.log('Callback gets called!');
            except(err).to.be.null
            except(result).to.equal(4)

            // AND call 'done()' after callback done!
            done()   
        })
    })

    it("should get error if first param is String", function(done) {

        calcSquare('wahaha', function(err, result) {
            console.log('Callback gets called!');

            except(err).to.not.be.null
            except(err.message).to.equal('Argument of type number is excepted!')
            except(result).to.be.undefined
            // AND call 'done()' after callback done!
            done()   
        })
    })
})

describe("calc square promise test suit!", function() {
    // For test Callback:
    // MUST pass function 'done' to it function
    // AND call 'done()' after callback done!
    it("square of 2 is 4!", function(done) {
        const p = calcSquarePromise(2)
        p.then(function(value) {
            except(value).to.be.equal(4)
            done()
        }, function(reason) {
            console.log(`error reason ${reason}!`);
            done()
        })

        /*
        calcSquare(2, function(err, result) {
            console.log('Callback gets called!');
            except(err).to.be.null
            except(result).to.equal(4)

            // AND call 'done()' after callback done!
            done()   
        })
        */
    })

    it("should get error if first param is String", function(done) {
        const p = calcSquarePromise('xxx')
        p.then(function(value) {
            console.log(`value is: ${value}`);
        }   , function(error) {
            console.log(`got err xxx: ${error}`);

            except(err).to.not.be.null
            except(err.message).to.equal('Argument of type number is excepted!')
            except(result).to.be.undefined
            done()   
        }).catch(function(err){
            console.log(`err is :${err}`);
            // console.log(`got error: ${err}`);
            // except(err).to.not.be.null
            // except(err.message).to.equal('Argument of type number is excepted!')
            // except(result).to.be.undefined
            done() 
        }) 

        it("should get error if first param is String", function(done) {
            const p = calcSquarePromise(2)
            p.then(function(value) {
                console.log(`value is: ${value}`);
            }   , function(error) {
                console.log(`got err xxx: ${error}`);
    
                except(err).to.not.be.null
                except(err.message).to.equal('Argument of type number is excepted!')
                except(result).to.be.undefined
                done()   
            }).catch(function(err){
                console.log(`err is :${err}`);
                // console.log(`got error: ${err}`);
                // except(err).to.not.be.null
                // except(err.message).to.equal('Argument of type number is excepted!')
                // except(result).to.be.undefined
                done() 
            }) 
        /*
        calcSquare('wahaha', function(err, result) {
            console.log('Callback gets called!');

            except(err).to.not.be.null
            except(err.message).to.equal('Argument of type number is excepted!')
            except(result).to.be.undefined
            // AND call 'done()' after callback done!
            done()   
        })
        */
    })

    it("square of 2 is 4!", function(done) {
        const p = calcSquarePromise(2)
        p.then(function(value) {
            // except(value).to.be.equal(4)   
            return calcSquarePromise(value) // 
        }).then(function(value) {
            except(value).to.be.equal(16)
            done()
        })
    })
})
