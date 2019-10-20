console.log('utils.js is running')

const square = (x) => x*x;

const add = (a, b) => a+b;



//export const subtract = (a, b) => a-b; // inline
const subtract = (a, b) => a-b; // subtract will be default

// export variables that you want to use in the file importing it
export {square, add, subtract as default}
// export default subtract
// export default (a,b) => a-b;


// export - default export - named exports

/*
importing utils
//import './utils.js';

import sub, { square, add } from './utils' //subtract(default) can be aliased but 


console.log(square(4));
console.log(add(25,14));
console.log(sub(25,10));

*/