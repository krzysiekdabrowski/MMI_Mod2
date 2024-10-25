const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
it("should convert 32°F to 0°C", function() {
        const result = apiTemperature.fahrenheitToCelcius(32);
        expect(result).to.equal(0);
    });

    it("should convert 212°F to 100°C", function() {
        const result = apiTemperature.fahrenheitToCelcius(212);
        expect(result).to.equal(100);
    });

    it("should convert 98.6°F to 37°C", function() {
        const result = apiTemperature.fahrenheitToCelcius(98.6);
        expect(result).to.be.closeTo(37, 0.1); // Using closeTo for floating point precision
    });
});