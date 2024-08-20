// => Common JS

console.log('Hello sir, i am file one');
// require('./l40filetwo');  // must has ./ startFromHere

// let girl = "Su Su";
// console.log(girl);

// let boy = require("./l40filetwo");
// console.log(boy);


// let getcity = require('./l40filetwo');
// console.log(getcity); // { prop_city: 'Mandalay' }
// console.log(getcity.prop_city); // Mandalay


let getobj = require("./l40filetwo");
console.log(getobj); // { greeting: 'Hello Sir', message: 'Have a good day' }
console.log(getobj.greeting); // Hello Sir
console.log(getobj.message); // Have a good day

// console.log(module);
console.log(module.children[0].exports); // { greeting: 'Hello Sir', message: 'Have a good day' }
console.log(module.children[0].exports.greeting); // Hello Sir
console.log(module.children[0].exports.message); // Have a good day
