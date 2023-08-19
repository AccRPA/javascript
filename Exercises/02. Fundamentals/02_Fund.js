console.log(String(Symbol('id')));
console.log(typeof null); // object !!!
console.log(typeof undefined); // undefined
console.log(typeof new Object()); // object
const myfunc = function(){};
console.log(typeof myfunc); // function
const myfunc2 = () => '';
console.log(typeof myfunc2);

const b1 = Boolean('2'); // is simply calling the function Boolean() which returns a boolean
// String, Number, Boolean with new only for internal use of javascript
const b2 = new Boolean('2'); // is creating a 'wrapper object', so it is an object but when printing it returns a boolean
b2.toString = function(){ // overriding the toString method of the object
    return 4;
}
console.log(`${b1}, ${b2}`); // true, 4
console.log(`${typeof b1}, ${typeof b2}`); // boolean, object