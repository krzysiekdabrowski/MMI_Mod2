//One unit test of increaseTemperature

const { expect } = require('chai');
const jsdom = require('jsdom-global');

//Mocking
jsdom();

document.body.innerHTML = `
    <div id="temperature"></div>
`;

function updateDisplay() {
    const temperatureObj = document.getElementById("temperature");
    temperatureObj.innerText = `Temperatur: ${temperature} Celsius`;
}

// Unit Test
let temperature = 21;
describe('increaseTemperature', function () {
    it('should increase temperature by 1 and update display', function () {
        increaseTemperature();

        // Check if the temperature variable has been incremented
        expect(temperature).to.equal(22);

        // Check if the displayed value is updated correctly
        const displayedTemperature = document.getElementById("temperature").innerText;
        expect(displayedTemperature).to.equal(`Temperatur: 22 Celsius`);
    });
});