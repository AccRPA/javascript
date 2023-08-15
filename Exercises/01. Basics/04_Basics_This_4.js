function makeUser() {
    return {
        name: "John",
        ref: function(){
            arrow = () => console.log(this.name); // arrow functions take the 'this' from the method property.
            arrow();

            function f2 (){ // this function is not a method of the object, this is the global or undefined if strict mode
                obj = {
                    name: 'Adri',
                    arrow2: () => console.log('2: ' + this) // this is getting the this from the f2
                }
                obj.arrow2();
            }
            f2();
            return this;
        }
    };
}

let user = makeUser();
console.log( user.ref() ); // John