const supertest = require('supertest');
const server = require('../index');
const chai = require('chai');
chai.should();
const api = supertest.agent(server);

const { celsiusToFahrenheit, fahrenheitToCelcius, getGreetingDependOnTime } = require('./auxiliaryAPI');


//app mock

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON requests

// Endpoint for celsiusToFahrenheit
app.get('/celsiusToFahrenheit/:celsius', (req, res) => {
    const celsius = parseFloat(req.params.celsius);
    const fahrenheit = celsiusToFahrenheit(celsius);
    res.status(200).json({ fahrenheit });
});


//example unit test
describe('Auxiliary API Tests', () => {

    // Test for celsiusToFahrenheit
    describe('celsiusToFahrenheit/:celsius', () => {
        it('should convert Celsius to Fahrenheit', (done) => {
            request(app)
                .get('/celsiusToFahrenheit/0')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect((res) => {
                    res.body.fahrenheit.should.equal(32); // 0°C = 32°F
                })
                .end(done);
        });

        it('should convert Celsius to Fahrenheit correctly for 100°C', (done) => {
            request(app)
                .get('/celsiusToFahrenheit/100')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect((res) => {
                    res.body.fahrenheit.should.equal(212); // 100°C = 212°F
                })
                .end(done);
        });
    });
}