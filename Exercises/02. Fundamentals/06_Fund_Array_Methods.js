/**
 * Escribe la función camelize(str) que convierta palabras separadas por guión como “mi-cadena-corta” 
 * en palabras con mayúscula “miCadenaCorta”.
 * Esto sería: remover todos los guiones y que cada palabra después de un guión comience con mayúscula.
 */
function camelize(str){
    if(!str?.length) return str;
    return str
        .split('-')
        .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
        .join('');
/*     const arrayWords = str.split('-');    
    let result = arrayWords[0];
    for (let i = 1; i < arrayWords.length; i++){
        result += arrayWords[i][0].toUpperCase() + arrayWords[i].slice(1).toLowerCase();
    }
    return result; */
}


console.log(null == 0) // false, because null and undefined are not equals to anything else except themselves
console.log(undefined == 0) // false
console.log(null?.length == 0) // false because ? is undefined and undefined == 0 => false
console.log(undefined?.length == 0) // false because ? is undefined and undefined == 0 => false
console.log(''?.length == 0) // true
console.log(null?.length <= 0) // false => convert the undefined to Number which is NaN which is not equals to anything
console.log(undefined?.length <= 0) // false => convert the undefined to Number which is NaN which is not equals to anything

console.log(camelize('mi-cadena-corta'));
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
/**
 * Escribe una función filterRange(arr, a, b) que obtenga un array arr, 
 * busque los elementos con valor mayor o igual a 'a' y menor o igual a 'b' y devuelva un array con los resultados.
 * La función no debe modificar el array. Debe devolver un nuevo array.
 * 
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (valores dentro del rango)
alert( arr ); // 5,3,8,1 (array original no modificado)
 */
function filterRange(arr, a, b){
    return arr
        .filter((item) => item >= a && item <= b );
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);

/**
 * Escribe una función filterRangeInPlace(arr, a, b) que obtenga un array arr 
 * y remueva del mismo todos los valores excepto aquellos que se encuentran entre a y b. 
 * El test es: a ≤ arr[i] ≤ b.
 * La función solo debe modificar el array. No debe devolver nada.
 */
function filterRangeInPlaceBAD(arr, a, b){
    // this does not work, the arr is passed by reference as a local variable with scope only in this function
    // so after the function finished the local copy is destroy and the original keeps untouched.
    arr = arr.filter(item => item >= a && item <= b);
}

// functions that mutates the original array:
// sort, reverse, splice, forEach
// This works because it mutates the items of the original array
function filterRangeInPlace(arr, a, b){
    arr.forEach((item, index) => {
        if (item < a || item > b)
        {
            arr.splice(index, 1);
        } 
    });
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4); // remueve los números excepto aquellos entre 1 y 4
console.log( arr2 ); // [3, 1]

/**
 * Ordenar en orden decreciente
 */
let arr3 = [5, 2, 1, -10, 8];
arr3.sort((a,b) => b - a);
console.log(`Arr3 sorted descendent:  ${arr3}` ); // 8, 5, 2, 1, -10

/**
 * Copia y ordena un array
 * Supongamos que tenemos un array arr. Nos gustaría tener una copia ordenada del mismo, 
 * pero mantener arr sin modificar.
 * Crea una función copySorted(arr) que devuelva esa copia.
 */
function copySorted(arr){
    return arr.slice().sort(); // or cahnge the sort by sort((a, b) => a.localeCompare(b));
}
let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);
console.log(`Excercise 4 sorted: ${sorted}`); // CSS, HTML, JavaScript
console.log(`Excercise 4 original: ${arr4}`); // HTML, JavaScript, CSS (sin cambios)

/**
 * Crea una calculadora extensible
 * Crea una función Calculator que cree objetos calculadores “extensibles”.
 * La actividad consiste de dos partes.
 * 
 * Primero, implementar el método calculate(str) que toma un string como "1 + 2" 
 * en el formato “NUMERO operador NUMERO” (delimitado por espacios) y devuelve el resultado. 
 * Debe entender más + y menos -.

 * Luego agrega el método addMethod(name, func) que enseñe a la calculadora una nueva operación. 
 * Toma el operador name y la función con dos argumentos func(a,b) que lo implementa.
 * Por ejemplo, vamos a agregar la multiplicación *, division / y potencia **:

 * Sin paréntesis ni expresiones complejas en esta tarea.
 * Los números y el operador deben estar delimitados por exactamente un espacio.
 * Puede haber manejo de errores si quisieras agregarlo.
 */
function Calculator(){
    this.operations = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b
    }
    
    this.calculate = function(str){
        if(!str?.length) return str;
        const arr = str.split(' '), 
            symbol = arr[1],
            op1 =  +arr[0],
            op2 = +arr[2],
            operation = this.operations[symbol];

        if (!operation || !isFinite(op1) || !isFinite(op2)) return 'error';
        
        return operation(op1, op2);
    }

    this.addMethod = function(name, operation){
        this.operations[name] = operation ;
    }
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
console.log(calc.calculate('2 * 3')); // 6
console.log(calc.calculate('2 ** 3')); // 8

/**
 * Tienes un array de objetos user, cada uno tiene user.name. 
 * Escribe el código que lo convierta en un array de nombres.
 */
let john = { name: "John", age: 25, surname: "Smith", id: 1};
let pete = { name: "Pete", age: 30, surname: "Hunt", id: 2};
let mary = { name: "Mary", age: 28, surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
console.log( names ); // John, Pete, Mary

/**
 * Tienes un array de objetos user, cada uno tiene name, surname e id.
 * Escribe el código para crear otro array a partir de este, de objetos con id y fullName, 
 * donde fullName es generado a partir de name y surname.
 */
// arrow function with parenthesis so JS can recognize the object
let usersMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}));

/*
usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log(usersMapped[0].fullName ) // John Smith

/**
 * Escribe la función sortByAge(users) que cree un array de objetos con al propiedad age y los ordene según age.
 */
function sortByAge(users){
    users.sort((a, b) => a.age - b.age);
}

sortByAge(users);
console.log( users[0].name ) // John
console.log( users[1].name ) // Mary
console.log( users[2].name ) // Pete

/**
 * Barajar un array
 * Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
 * Múltiples ejecuciones de shuffle puede conducir a diferentes órdenes de elementos. Por ejemplo:
 * Todos los reordenamientos de elementos tienen que tener la misma probabilidad. 
 * Por ejemplo, [1,2,3] puede ser reordenado como [1,2,3] o [1,3,2] o [3,1,2] etc, 
 * con igual probabilidad en cada caso.
 */
function shuffle(arr){
    arr.forEach((item, index) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const temp = arr[randomIndex];
        arr[randomIndex]  = item;
        arr[index] = temp;  
    })
}
const arr8 = [1, 2, 3];
shuffle(arr8)
console.log(arr8);
shuffle(arr8)
console.log(arr8);
shuffle(arr8)
console.log(arr8);


const arr9 = [1, 42, 30, 3, 67, 12, 33];
shuffle(arr9)
console.log(arr9);
shuffle(arr9)
console.log(arr9);
shuffle(arr9)
console.log(arr9);

/**
 * Obtener edad promedio
 * Escribe la función getAverageAge(users) que obtenga un array de objetos con la propiedad age y 
 * devuelva el promedio de age.
 * La fórmula de promedio es (age1 + age2 + ... + ageN) / N.
 */
function getAverageAge(users){
    return users.reduce((accumulator, item) => accumulator + item.age, 0) / users.length;
}

let arr11 = [ john, pete, mary ];
console.log( getAverageAge(arr11) ); // (25 + 30 + 29) / 3 = 28

/**
 * Filtrar elementos únicos de un array
 * Partiendo del array arr.
 * Crea una función unique(arr) que devuelva un array con los elementos 
 * que se encuentran una sola vez dentro de arr.
 */
function unique(arr){
    return arr.reduce((accumulator, item) => {
        if (!accumulator.includes(item)){
            accumulator.push(item);
        }
        return accumulator;
    }, []);
}
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log( unique(strings) );

/**
 * Crea un objeto a partir de un array
 * Supongamos que recibimos un array de usuarios con la forma {id:..., name:..., age:... }.
 * Crea una función groupById(arr) que cree un objeto, con id como clave (key) y los elementos del array 
 * como valores.
 */
function groupById(arr){
    return arr.reduce((accumulator, item) => {
        accumulator[item.id] = item;
        return accumulator;
    }, {});
}
let usersById = groupById(users);
console.log(usersById);