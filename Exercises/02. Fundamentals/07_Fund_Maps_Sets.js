const myobj12 = {
    1: 34,
    1: 54
}

console.log(myobj12[1]); // it allows duplicated keys
const iterable = Object.entries(myobj12);
console.log(iterable.toString()); // it does not have repeated keys.
const map = new Map(iterable); // it does not allow repeated keys
console.log(map.get('1'));

const map2 = new Map([
    [1, 43],
    ['1', 56]
]);
console.log(map2.get(1));
console.log(map2.get('1'));

/**
 * Cree una función unique(arr) que debería devolver un array con elementos únicos de arr.
 */
function unique(arr){
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values) ); // Hare, Krishna, :-O

/**
 * Anagramas son palabras que tienen el mismo número de letras, pero en diferente orden.

Por ejemplo:

nap - pan
ear - are - era
cheaters - hectares - teachers
Escriba una función aclean(arr) que devuelva un array limpio de anagramas.
 */

function aclean(arr){
    const cleanMap = arr.reduce((accumulator, item) => {
        const sortedWord = Array.from(item.toLowerCase()).sort().join('');
        if (!accumulator.has(sortedWord)){
            accumulator.set(sortedWord, item);
        }
        return accumulator;
    }, new Map());
    return Array.from(cleanMap.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arr) );

/**
 * Nos gustaría obtener un array de map.keys() en una variable y luego aplicarle métodos específicos de array, ej. .push.
 */

let map3 = new Map();
map3.set("name", "John");
let keys = map3.keys(); // iterable ->  array-like
// Error: keys.push no es una función
//keys.push("more");

keys = Array.from(map3.keys()); // no is an array
keys.push("more");
console.log(keys);