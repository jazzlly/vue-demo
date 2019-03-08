var assert = require('assert')
// var should = require('should')

before(async function () {
    console.log('Hook: global before async');
});

beforeEach(function () {
    console.log('hook: global beforeEach');
});

// fixme: do NOT use arrow function
describe('Array', function () {
    before(function () {
        // runs before all tests in this block
        console.log('hook: before');
    });

    after(function () {
        // runs after all tests in this block
        console.log('hook: after');
    });

    beforeEach(function () {
        // runs before each test in this block
        console.log('hook: beforeEach');
    });

    afterEach(function () {
        // runs after each test in this block
        console.log('hook: afterEach');
    });

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1)
        })
    })
    describe('#indexOf()', function () {
        it('should return non-zero when the value is present', () => {
            assert.notEqual([1, 2, 3, 5, 6].indexOf(3), -1);
        })
    })

})