console.log('I am file a');
console.log(require('./l43fileb'));
console.log(require('./l43fileb'));
console.log(require('./l43fileb'));
console.log(require('./l43fileb'));
console.log(require('./l43fileb'));

// console.log(module);
// console.log(require);
// console.log(require.main === module); // true 

// console.log(require.resolve); // [Function: resolve] { paths: [Function: paths] }
// console.log(require.resolve("./l43fileb")); // /home/administrator/Documents/ES6Bathch1/ES6/l43fileb.js
// console.log(require.cache[require.resolve("./l43fileb")].exports); // 1724040513354


// override 
    // require.cache[require.resolve("./l43fileb")].exports = "Here is a new value";
    // console.log(require('./l43fileb.js')); // Here is a new value


// delete 
    delete require.cache[require.resolve('./l43fileb')];
    console.log(require('./l43fileb.js')); // Here is a new value