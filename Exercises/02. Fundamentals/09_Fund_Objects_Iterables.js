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

const arr = [{name: 'john'}, {name: 'Tri'}, {name: 'Sarah'}];
console.log(arr);
function initializeVisits(arr){
    const obj = {visits: 0};
    return arr.map(item => {
        // convert object to array
        const arrtemp = Object.entries(item); // [['name', 'john'], ['name', 'Tri'], etc]

        // this does not work, because Array.from takes an iterable, and an object is not it
        const arrfrom = Array.from(obj);

        arrtemp.push(Object.entries(obj)[0]); // [['visits', 0]]  [0] to access the array  
        console.log(JSON.stringify(arrtemp));
        const changed = Object.fromEntries(arrtemp); // return the object
        console.log(JSON.stringify(changed));
        return changed;
    });
    // simpler
    /* return arr.map(item => {
        item['visits'] = 0
        return item;
    }); */
}

const arrResult = initializeVisits(arr);
console.log(JSON.stringify(arrResult));