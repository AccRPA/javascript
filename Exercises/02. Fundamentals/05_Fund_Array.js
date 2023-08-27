// check if a string is a number greater or equals to 0
function isNumber(value){
    return value?.length > 0 && +value >=0;
}
console.log(isNumber(null));
console.log(isNumber(undefined));
console.log(isNumber(''));
console.log(isNumber('0'));
console.log(isNumber('123'));
console.log(isNumber('123re'));
console.log(isNumber('-30'));
console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(Number(null));

// arrays are objects, but we shoulnd't use like that
const arr = [];
arr['test']= 0;
arr[2] = 2;
console.log(arr['test']);

/**
 * Tratemos 5 operaciones de array.
Crear un array styles con los items “Jazz” y “Blues”.
Agregar “Rock-n-Roll” al final.
Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el valor medio debe funcionar con cualquier array de longitud impar.
Quitar el primer valor del array y mostrarlo.
Anteponer Rap y Reggae al array.
El array durante el proceso:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
 */

const styles = ['Jazz', 'Blues'];
console.log(`array: ${styles}`);
styles.push('Rock-n-Roll');
console.log(`array: ${styles}`);
const medio = Math.floor(styles.length % 2);
styles[medio] = 'Classics';
console.log(`array: ${styles}`);
console.log(`Value removed: ${styles.shift()}`);
console.log(`array: ${styles}`);
styles.unshift('Rap', 'Reggae');
console.log(`array: ${styles}`);


console.log(isFinite(null)); // true
/**
 * Escribe una función sumInput() que:
Pida al usuario valores usando prompt y los almacene en el array.
Termine de pedirlos cuando el usuario ingrese un valor no numérico, una cadena vacía, o presione “Escape”.
Calcule y devuelva la suma de los items del array.
P.D. Un cero 0 es un número válido, por favor no detengas los ingresos con el cero.
 */

function sumInput(){
    const arr = [];

    while(true) {
        const value = prompt('Insert a number', 0);
        if (value?.length == 0 || !isFinite(value)) break;
        arr.push(+value);
    }
    
    let sum = 0;
    for(let value of arr){
        sum += value;
    }
    return sum;
}

/**
 * La entrada es un array de números, por ejemplo arr = [1, -2, 3, 4, -9, 6].
La tarea es: encuentra el subarray contiguo de items de arr con la suma máxima.
Escribe la función getMaxSubSum(arr) que devuelva tal sumo.
getMaxSubSum([-1, 2, 3, -9]) == 5 (la suma de items resaltados)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (toma todo)
getMaxSubSum([-1, -2, -3]) = 0 Si todos los elementos son negativos, significa que que no tomamos ninguno
*/
function getMaxSubSum(arr){

}