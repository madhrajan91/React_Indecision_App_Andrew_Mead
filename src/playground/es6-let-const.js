var nameVar = 'Andrew'
var nameVar = 'Madhav'
console.log('nameVar', nameVar)

let nameLet = 'Andrew'
//let nameLet = 'Madhav' // cannot do this
console.log('nameLet', nameLet)

const nameConst = 'Andrew'
//const nameConst = 'Madhav' // wont work
// nameConst = 'Madhav' // wont work
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Dog'
    return petName;
}

getPetName();
//console.log(petName) // wont work


// Block scoping

var fullName = 'Madhav Rajan';

if (fullName) {
    var firstName = fullName.split(' ');
    const fName = fullName.split(fullName);
    let fName2 =  fullName.split(fullName);
    console.log(fName)
    console.log(fName2)
}
console.log(firstName); // works
//console.log(fName) // wont work
//console.log(fName2) // wont work

