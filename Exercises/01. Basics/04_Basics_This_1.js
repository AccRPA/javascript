function makeUser() {
    return {
        name: "John",
        ref: function(){
            console.log('user oj: ' + this); // obj
            function second (){
                return this; // global this
            }
            console.log('second: ' + second());
            return this;
        }, 
        gob: this,// is the global this becuase it is not inside a function
        arrow: () => this // is the global because arrow functions does not have own this
    };
}

let user = makeUser();
console.log( user.ref().name ); // John
console.log( user.gob ); // John
console.log( user.arrow() ); // John