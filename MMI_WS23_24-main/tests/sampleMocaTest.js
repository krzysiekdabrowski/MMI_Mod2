const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })
// Test: should return 0 for an empty array
    it('should return 0 for an empty array', function () {
        expect(sum([])).to.equal(0);
    });

    // Test: should handle negative numbers
    it('should handle negative numbers', function () {
        expect(sum([-1, -2, -3, -4, -5])).to.equal(-15);
    });

    // Test: should handle a single number
    it('should return the number itself when a single number is provided', function () {
        expect(sum([10])).to.equal(10);
    });

    // Test: should handle large numbers
    it('should handle large numbers', function () {
        expect(sum([1000000, 2000000, 3000000])).to.equal(6000000);
    });

    // Test: should ignore non-numeric values (assuming we want to skip them)
    it('should ignore non-numeric values', function () {
        expect(sum([1, 2, 'three', null, 4])).to.equal(7);
    });
});