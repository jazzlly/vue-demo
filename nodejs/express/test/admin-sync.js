let loginId = require('./cookie').loginId
var assert = require('assert')


// fixme: do NOT use arrow function
describe('Array', function () {
    describe('#indexOf()', function () {
        console.log(`admin-sync loginId: ${loginId}`)

        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1)
        })
    })
})