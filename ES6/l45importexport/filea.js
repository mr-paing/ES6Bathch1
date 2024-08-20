console.log('I am file A');

// import "./fileb.js";

// import ("./fileb.js");
// import ("./fileb.js");
// import ("./fileb.js");
// import ("./fileb.js");



// import {myfunone} from "./fileb.js"
// myfunone();

// alias 
// import {myfunone as myvipfun} from "./fileb.js"
// myvipfun();


// import {greeting} from "./fileb.js"
// console.log(greeting);


// import {greeting,id} from "./fileb.js"
// console.log(greeting);
// console.log(id);

// import {sayhi,id as idx} from "./fileb.js"
// console.log(sayhi);
// console.log(idx);

// import {greeting,id,myfunone} from "./fileb.js"
// console.log(greeting);
// console.log(id);
// myfunone();


import * as obj from "./fileb.js"
console.log(obj);
console.log(obj.greeting);
console.log(obj.id);
obj.myfunone();












// npm innit -y
//  - change "test" : "node filea" instact of original
//  - add "type"  : "module" into package.json
//  - run npm run test

// note :: 
    // - must be extensition
    // - it work one time invoke as well as require
