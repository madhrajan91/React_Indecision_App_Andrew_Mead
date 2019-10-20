// arguments object - no longer bound with arrow functions

/*
const add = function (a, b) {
    console.logs(arguments)
    return a+b;
}
console.log(add(55,6,1,2))

*/

const add = (a,b) => {
    //console.log(arguments)
    return a+b;
}

// this keyword - no longer bound

const user = {
    "name": "Madhav",
    "cities": ["Boston", "Tempe", "Chennai"],
    printPlacesLived: function() {
        const that = this; //cannot access this in annonymous function
        console.log(this.name);
        console.log(this.cities);
        // map helps iterate and return a transformed new array 
        // example city messages is a transformed version of city
        const cityMessages = this.cities.map((city) => {
            return this.name + " has lived in  " +city+ '!'; // can add something to the array
        });
        console.log(cityMessages);

        this.cities.forEach(function(city) {
            console.log('Not arrow (this is that) ' + that.name + " " + city);
        })

        this.cities.forEach(city => {
            console.log('Arrow, this keyword works in scope ' + this.name + " " + city);
        });
    },
    // another valid memberfunction
    printSayHello(str) {
        console.log(this.name + " says " + str);
    } 
}

user.printPlacesLived();
user.printSayHello("madame");


// // arrow member functions does not work
// const user2 = {
//     "name": "Madhav",
//     "cities": ["Boston", "Tempe", "Chennai"],
//     printPlacesLived: () => {
//         this; // no this in parent(global) scope (its all relative)
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach(city => {
//             console.log('Arrow, this keyword works in scope ' + this.name + " " + city);
//         });
//     }
// }

// Challenge

const multiplier = {
    // number - array of numbers
    "numbers": [1, 2, 3],
    "multiplyBy": 2,
    "multiply": function () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
    // multiplyBy - single number
    // muliply -  return new array where the numbers have been multiplied by
}

console.log(multiplier.multiply())