const num1 = 1_00_0;
const num2 = 1.23e6;
const num3 = 1000;
const num4 = 1234e-2; // 1234 / 100 => 12.34

const num6 = 0xffffff // color white to number => #ffffff
console.log(num6);
const num7 = 255;
console.log(4586653215..toString(36)); // for urls for exmaple

console.log(Math.floor(-3.1)); // 4
console.log(Math.ceil(-3.9)); // 3
console.log(Math.round(-3.5)); // -3
console.log(Math.round(3.5)); // 4

console.log(Math.trunc(1.23));
console.log((1.2).toFixed(2));

console.log(typeof Infinity);
console.log(typeof NaN);
console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false
console.log(typeof Number);
console.log(Infinity === Infinity);

// it coverts to number and then check if it is a regular number
console.log('----');
console.log(isFinite(15)); // true
console.log(isFinite("")); // true
console.log(isFinite("123")); // true
console.log(isFinite("srt")); // false
console.log(isFinite(NaN)); // false

const num8 = parseInt(4586653215..toString(36), 36);
console.log(num8);
console.log(parseFloat('12.234').toFixed(2));

const obj = {
    [Symbol.toPrimitive]: function(hints){
        return hints === 'string' ? 'hi!' : hints === 'number' ? 4 : 'dunno';
    },
    salutation(){
        console.log('I say hi!');
    }
}
const objw = {};
objw[obj] = 'nested!';
console.log(obj * 2);
console.log(objw['hi!']);

console.log(obj?.salutation?.());

// Crea un script que pida al visitante que ingrese dos números y muestre su suma.
const number1 = 'whatever';
const number2 = '23';

if (isFinite(number1) && isFinite(number2)){
    console.log((+number1) + (+number2));
}else{
    console.log('some of the arguments are not a number');
}

console.log('----');
console.log(1.35.toFixed(1));
console.log(Math.round(1.35));
console.log(6.35.toFixed(1)); // internally the fraction has a small decimal so it is rounded to floor
console.log(((Math.round(6.35 * 10))/10)); // this is the correct result
console.log(Math.round(6.35));


/** Crea una función readNumber que pida un número hasta que el visitante ingrese un valor numérico válido.
* El valor resultante debe ser devuelto como number.
* El visitante puede también detener el proceso ingresando una linea vacía o presionando “CANCEL”. 
* En tal caso la función debe devolver null.
*/
function readNumber(){
    let value;
    do{
        value = prompt('introduce a number', 0);        
    } while (!isFinite(value));

    // '' and null are 0 when converting to number, so they are finites
    if (value === '' || value === null){
        return null;
    }

    console.log(+value);
}

function random(a, b){
    // 0 to 0.99, 3 to 6 => 3.234, 4.234, etc, 4.99
    const random = Math.random() * (b - a) + a;   
    return random;
}

function randomInteger(min, max){
    const random = Math.random() * (max - min + 1) + min;   
    return Math.floor(random);
}

console.log(random(3,6));
console.log(random(3,6)); 
console.log(random(3,6));
console.log(random(3,6));
console.log(random(3,6));
console.log('------');
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));

