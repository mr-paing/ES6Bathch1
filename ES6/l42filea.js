// Circular Dependency 

// console.log('I am file a');
// require('./l42fileb.js');


console.log('I am file a');
module.exports = "Hello sir, I am from file a";
require("./l42fileb");