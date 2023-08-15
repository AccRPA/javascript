/*Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.*/

let calculator = {
    read(a,b){
        this.a = a;
        this.b = b;
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};

calculator.read(3,4);
console.log( calculator.sum() );
console.log( calculator.mul() );