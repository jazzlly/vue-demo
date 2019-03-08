const except = require('chai').expect
const assert = require('chai').assert

let foo='bar'
let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe('assert test', function(){

})
describe('except test', function(){
    it('foo is a string!', function() {
        except(foo).to.be.a('string')
    })
    it('foo equal "bar"', function() {
        except(foo).to.equal('bar')
    })
    it('misc test', function() {
        except(foo).to.be.a('string')
        except(foo).to.equal('bar')
        except(foo).to.has.lengthOf(3)
        except(beverages).to.have.property('tea').with.lengthOf(3)
    })

    it('customized error message', function() {
        // except(32).to.equal(34);
        // except(32, 'customized error: blablabla...').to.equal(35)
    })
})