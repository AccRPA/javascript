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


/**
 * THIS WORKS BY REFERENCE COPY BECAUSE IT IS AN OBJECT.
 * The reference in the variable is copied to the array, map or set, so if the variable is null,
 * the copy reference to the object is still there, the problem is that now we don't have that direct reference anymore 
 * then to get that value or key we have to loop the array or use map.keys
 */

let john = {
    age: 34
};
const myarr = [john];
const mymap = new Map();
mymap.set(john, 'myjohn');
console.log(myarr[0]);
console.log(mymap.get(john));
john = null; // the object still exist but this reference is null
console.log(myarr[0]); // this reference to the object exist
console.log(mymap.get(john)); // this reference does not exist, because the reference is null
console.log(mymap.get(null)); // null as a key does not exist
console.log(mymap); // the map still has the object has a key 

console.log(mymap.set({
    age: 34
}, 'hello')); // it does work because is a new object with a different reference
console.log(mymap.get({
    age: 34
})); // it does work because is a new object with a different reference

const obj2 = {
    NaN: 'isNaN'
};
console.log(obj2['NaN']);


const objchange = {
    age: 45
};

/* const mapChange = new Map(Object.entries(objchange));
console.log(mapChange);
objchange.age = 20;
console.log(mapChange);
console.log(mapChange.get('age')); */

const mapChange2 = new Map();
mapChange2.set(objchange, 'change');
console.log(mapChange2);
objchange.age = 20;
console.log(mapChange2);
console.log(mapChange2.get(objchange)); // it is the same reference, even when the object has changed

const mapChange3 = new Map();
mapChange3.set('change', objchange);
console.log(mapChange3);
objchange.age = 70;
console.log(mapChange3);
console.log(mapChange3.get('change')); 
