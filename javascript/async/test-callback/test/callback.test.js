const calcSquare = require('../callback-error').foo
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
