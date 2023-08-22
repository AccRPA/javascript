console.log('hello'+ 
'there'); // two line in code, one line printed
console.log('hello \n'+ 
'there'); // one line in code, two line printed with \n
console.log(`hello
there`); // two lines in code, two lines printed, it inserts the \n automatically
console.log('a\nb' === `a
b`);

const text = 'nothing';
callme`I don't know ${text} yet`; // strange feature

function callme(...args){
    console.log(`callme function: text: ${args[0]} and value: ${args[1]}`);
}

const message = 'Hi there';
console.log(message.codePointAt(2));
console.log(String.fromCodePoint(105));

/**
 * Escribe una función ucFirst(str) que devuelva el string str con el primer carácter en mayúscula, por ejemplo:
 */
function ucFirst(str){
    return !!str ? str[0].toUpperCase() + str.slice(1) : str;
}
console.log(ucFirst('john'));

/**
 * Escribe una función checkSpam(str) que devuelva true si str contiene ‘viagra’ o ‘XXX’, de lo contrario false.
 * La función debe ser insensible a mayúsculas y minúsculas:
 */

function checkSpam(str){
    if (!str) return false;
    const lowerCase = str.toLowerCase();
    return lowerCase.includes('viagra') || lowerCase.includes('xxx');
}
console.log(checkSpam('here you have a great pill'));

/**
 * Crea una función truncate(str, maxlength) que verifique la longitud de str y, 
 * si excede maxlength – reemplaza el final de str con el carácter de puntos suspensivos "…", 
 * para hacer su longitud igual a maxlength.
 * El resultado de la función debe ser la cadena truncada (si es necesario).
 */
function truncate(str, maxlength){
    return str?.length > maxlength ? `${str.slice(0, maxlength)}...`: str;
}

console.log(truncate("Lo que me gustaría contar sobre este tema es:", 20));// "Lo que me gustaría c…"
console.log(truncate("Hola a todos!", 20)); // "Hola a todos!"

/**
 * Tenemos un costo en forma de “$120”. Es decir: el signo de dólar va primero y luego el número.
 * Crea una función extractCurrencyValue(str) que extraiga el valor numérico de dicho string y lo devuelva.
 */
function extractCurrencyValue(str){
    return +str?.slice(1);
}
console.log(extractCurrencyValue('$120') === 120); // true
console.log(extractCurrencyValue(null));

console.log('hello'.repeat(4));