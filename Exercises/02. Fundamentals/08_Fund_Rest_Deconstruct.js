
function get({showLoader = false, showStates = true, value}){
    console.log(showLoader);
    console.log(showStates);
    console.log(value);
}

get({value: 15});

// instead of
function get2 (showLoader = false, showStates = true, value){
    console.log(showLoader);
    console.log(showStates);
    console.log(value);
}

get2(undefined, undefined, 15); // null does not work to get the default value, it has to be undefined
get2(null, null, 15); // null does not work to get the default value, it has to be undefined

/**
Tenemos un objeto:

let user = {
    name: "John",
    years: 30
};
Escriba la asignación desestructurante que asigne las propiedades:

name en la variable name.
years en la variable age.
isAdmin en la variable isAdmin (false, si no existe tal propiedad)
*/
let user = {
    name: "John",
    years: 30
};
let {name, years, isAdmin = false} = user;
console.log(`${name}, ${years}, ${isAdmin}`);

/**
Hay un objeto salaries:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
Crear la función topSalary(salaries) que devuelva el nombre de la persona mejor pagada.

Si salaries es vacío, debe devolver null.
Si hay varias personas con la mejor paga, devolver cualquiera de ellas.
 */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    let name, salary = 0;
    for (let [key, value] of Object.entries(salaries)){
        if (value > salary){
            name = key;
            salary = value;
        }
    }
    return name;
}

console.log(topSalary(salaries));

console.log(isNaN('null')); // true
console.log(isNaN('undefined')); // true
console.log(isFinite(null)); // true
console.log(Number.isFinite(null)); // false
console.log(Number.isFinite(undefined)); // false
console.log(Number.isFinite('0')); // false
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(-0)); // true
console.log(Number.isNaN(null)); // false (first it has to be a number, null is not a number)
console.log(Number.isNaN(undefined)); // false (first it has to be a number, undefined is not a number)
console.log(Number.isNaN('undefined')); // false (first it has to be a number, 'undefined' is not a number is a string)
console.log(Number.isNaN(0)); // false
console.log(Number.isNaN(-0)); // false
console.log(Number.isNaN(NaN)); // true

console.log(typeof null);
console.log(typeof undefined);

console.log(null == undefined);
console.log(null === undefined); // no type coercion