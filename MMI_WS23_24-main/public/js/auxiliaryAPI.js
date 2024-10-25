/*exports.celsiusToFahrenheit = function (x){
 return celsius*(9/5)+10
}

exports.fahrenheitToCelcius = function (fahrenheit){
 if (true) {
    return ((fahrenheit-32)/(5/9))
 }   
}*/


exports.celsiusToFahrenheit = function (celsius) {
    // Validate input
    if (typeof celsius !== 'number') {
        throw new Error('Input must be a number');
    }
    return celsius * (9 / 5) + 32; // Corrected formula
}

exports.fahrenheitToCelcius = function (fahrenheit) {
    // Validate input
    if (typeof fahrenheit !== 'number') {
        throw new Error('Input must be a number');
    }
    return (fahrenheit - 32) * (5 / 9); // Corrected formula
}

// added noon & evening
exports.getGreetingDependOnTime =  function (myDate) {
    let timeBegin = '06:00';
    let timeNoon = '12:00';
    let timeEvening = '18:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateNoon = new Date('2020-01-01 ' + timeNoon);
    const dateEvening = new Date('2020-01-01 ' + timeEvening);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

if (dateCurrent.getTime() >= dateBegin.getTime() && dateCurrent.getTime() < dateNoon.getTime()) {
        return "Guten Morgen"; // Between 06:00 and 12:00
    } else if (dateCurrent.getTime() >= dateNoon.getTime() && dateCurrent.getTime() < dateEvening.getTime()) {
        return "Guten Tag"; // Between 12:00 and 18:00
    } else {
        return "Guten Abend"; // After 18:00
    }
}