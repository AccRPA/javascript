// it starts from the left side, because there is only the operator +, there is no precedence then
console.log(1 + 2 + 3 + '4');
console.log('1' + 2 + 3 + 4);
console.log(1 + 2 + '3' + 4);

// it starts from the left, because there is only the operator +, there is no precedence then
console.log(1 < 2 < 3);
console.log(2 < 1 == 0); // => 2 < 1 = false; Number(false) === 0 = true
console.log(null == 0); // false: because null is not equal to any other types except undefined
console.log(null <= 0); // true: because the comparison converts to Number since null type is different than 0 type
console.log(typeof null);
//Number(undefined) => Nan
//Number(null) => 0
let num = 2;
console.log(num *= num += 3); // because they are asignations, it starts form the right side => num *= 5 => 10

// String(1) = "1"

// Boolean(NaN, undefined, null, "", 0) => false

// Conversion to String: when printing or with the + operator
// Conversion to Number: for math or expresions
// Conversion to Boolean: Logic operations

console.log(undefined < 0);
// NaN es un valor numérico especial que retorna falso para todas las comparaciones.

console.log(Number([])); // 0
console.log(Number({})); // NaN
// https://quizzesforyou.com/quizzes/javascript

const check = "";
if (null !== check && undefined !== check){ // if is not null or undefined  !!false => false
    console.log('variable with value');
}else{
    console.log('variable null or undefined');
}

/* function example(){
    var a = 10;
}
example();
console.log(a); */

const myObj1 = {
    name: 'Sarah'
};
const myObj2 = {
    name: 'Sarah'
}
console.log(myObj1 == myObj2); // false, there is no conversion because both are the same type and the obj references are different
console.log(myObj1 === myObj2); // false, there is no conversion and the obj references are different
console.log(Number(myObj1)); // myObj will return the string [object Object] to Number is NaN
console.log(myObj1 + myObj2); // return the string [object Object][object Object]
console.log(myObj1 - myObj2); // try to convert a Number => NaN
console.log(myObj1 + 2); // return theString [object Object]2, because myObj1 return a string
