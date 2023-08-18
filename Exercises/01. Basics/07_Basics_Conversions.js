// Convert objet to primitive??
const obj1 = {
    name: 'John',
    [Symbol.toPrimitive]: function(hint){
        return hint === 'string' ? 'Hello' : 2; // 2 in case of number or default;
    },
};
const obj2 = {
    name: 'Alan'
};
const obj3 = Object.assign({}, obj1, obj2);
console.log(`${JSON.stringify(obj3)}`);
console.log(obj1 + obj2);

/** En ese caso, los objetos se convierten automáticamente en valores primitivos, 
* y luego se lleva a cabo la operación sobre esos primitivos, y resultan en un valor primitivo.
* Esto es una limitación importante: el resultado de obj1 + obj2 (u otra operación) ¡no puede ser otro objeto!
*/
const mykey = 'newkey';
const obj0 = {
    name: 'Dalia',
    money: 12.45,
    street: 'lombastick',
    toString(){
        return JSON.stringify(this); // it can return any primitive value
    },
    [mykey]: 2
}

console.log(obj1);
console.log(obj0);

obj0[obj1] = 2; // conversion of obj1 to string as a key of obj0
for (const prop in obj0){
    console.log(prop);
}

console.log(obj1 + 2); // hint default => both are numbers => there is no conversion => 4
console.log(obj1 * 2); // hint number => no conversion to Number, because both are numbers => 4

console.log(Symbol.toPrimitive); // is the symbol javascript uses for the conversion before toString() and valueOf()

console.log(null == undefined); // true
console.log(null === undefined); // false; there is no conversion and they are different types