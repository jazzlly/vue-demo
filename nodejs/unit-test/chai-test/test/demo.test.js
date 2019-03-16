const expect = require('chai').expect

let foo='bar'
let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe('assert test', function(){

})
describe('expect test', function(){
    it('foo is a string!', function() {
        expect(foo).to.be.a('string')
    })
    it('foo equal "bar"', function() {
        expect(foo).to.equal('bar')
    })
    it('misc test', function() {
        expect(foo).to.be.a('string')
        expect(foo).to.equal('bar')
        expect(foo).to.has.lengthOf(3)
        expect(beverages).to.have.property('tea').with.lengthOf(3)
    })

    it('customized error message', function() {
        // except(32).to.equal(34);
        // except(32, 'customized error: blablabla...').to.equal(35)
    })
})