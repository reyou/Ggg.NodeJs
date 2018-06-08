var assert = require('assert');

// Test Class
describe('Array', function () {
    // Test Method
    describe('#indexOf()', function () {
        // Asserts
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});