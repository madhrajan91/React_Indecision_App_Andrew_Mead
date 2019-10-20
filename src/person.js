export const isAdult = (age) => age>=18?true:false;

const canDrink = (age) => age>=21?true:false;
export {canDrink};

const isSenior = (age) => age>=65;
export default isSenior

// 
//import isOldie, {isAdult, canDrink} from "./person.js"

// console.log('app.js is running');
// console.log(isAdult(18));
// console.log(isAdult(8));

// console.log(canDrink(21));
// console.log(canDrink(18));

// console.log(isOldie(65));
// console.log(isOldie(25));
