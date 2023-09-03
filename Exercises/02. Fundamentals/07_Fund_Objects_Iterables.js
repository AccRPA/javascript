const obj = {
    name: 'Mary',
    age: 20
};
console.log(obj.hasOwnProperty('age'));
// converto to array, apply  find, includes, filter, reduce, etc
const obj2 = Object.fromEntries(Object.entries(obj).filter(([key, value]) => key === 'name' && value === 'Mary'));
// convert to object
console.log(obj2); // only the property filtered

/**
 * Hay un objeto salaries con un número arbitrario de salarios.
 * Escriba la función sumSalaries(salaries) que devuelva la suma de todos los salarios utilizando Object.values y el bucle for..of.
 * Si salaries está vacío, entonces el resultado debe ser 0.
 */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries));
console.log(sumSalaries({}));
function sumSalaries(obj){
    return Object.values(obj).reduce((accumulator, value) => accumulator += value, 0);
}

/**
 * Escriba una función count(obj) que devuelva el número de propiedades en el objeto
 */
let user = {
    name: 'John',
    age: 30
};

function count(obj){
    return Object.keys(obj).length;
}

console.log(count(user));