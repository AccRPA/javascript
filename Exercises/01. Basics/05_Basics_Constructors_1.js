function Constructor(a, b){ // does construct an empty object
    console.log(a + b);
}

const obj = new Constructor();
console.log(obj.a);

// Coversions - Comparisons - falsy, truly, Number constructor


// ¿Es posible crear las funciones A y B para que se cumpla new A() == new B()?
let obj1 = {};
function A() {
    return  obj1;
}
function B() {
    return obj1;
}

let a = new A();
let b = new B();

console.log( a == b ); // true

const person = {
    greet(){
        console.log('Hi!');
    }
};

const person2 = {};
let person3;

person2?.greet?.()
person3?.greet?.()
person.greet?.()