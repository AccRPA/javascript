// Convert objet to primitive??
const obj1 = {
    name: 'John'
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