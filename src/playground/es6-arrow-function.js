// can't have arrow functions named like this
// function square(x) {
//     return x * x;
// }


// const square = function(x) {
//     return x * x;
// }

//const squareArrow = (x) => {
//    return x * x;
//};

//const squareArrow = (x) => x * x;

// console.log(squareArrow(9))

// challenge
// getFirstName('Mike Smith') -> "Mike"

const getFirstNameBody = (str) => {
    return str.split(" ")[0];
}

const getFirstNameExpr = (str) => str.split(" ")[0];

console.log(getFirstNameBody('Madhav Rajan'))
console.log(getFirstNameExpr('Andrew Mead'))
