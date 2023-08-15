/**
* Create an empty user object.
* Add the name property with the value John.
* Add the property surname with the value Smith.
* Change the value of name to Pete.
* Remove the name property of the object.
 */
'use strict'

const user = new Object();
user.name = "John";
user.surname = "Smith"
user.name = "Pete";
user.f = function(){ console.log('hi there, function!'); };
user.obj = {
    size: 3
};
user.me = user;
delete user.name;

/** Write the function isEmpty(obj) that returns true if the object has no properties, false otherwise. */
const isEmpty = (obj) => {
    for (let prop in obj){
        return false;
    }
    return true;
};

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "Time to wake up";
console.log( isEmpty(schedule) ); // false

/** Create a function multiplyNumeric(obj) that multiplies all the numeric properties of obj by 2. */
function multiplyNumeric(obj){
    for (const prop in obj){
        if (typeof obj[prop] === "number"){
            obj[prop] *= 2;
        }
        console.log(prop);
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

multiplyNumeric(menu);
console.log(menu);

const myObj = {
    0: "Armchair",
    3: "Stool",
    6: "Chair"
}
console.log(myObj[6]);

let clone = {...user}; // does not copy nested objects
console.log(clone.surname);
console.log(clone == user);
clone.surname = 'Doe';
console.log(user.surname + ' ' + clone.surname);
console.log(clone.f());
clone.obj.size = 6;
console.log(clone.obj == user.obj);
console.log(user.obj.size);
console.log(clone.obj.size);

Object.assign(clone, user); // superficial copy

const clone2 = JSON.parse(JSON.stringify(user)); // does not work with circular structure
clone2.obj.size = 8;
console.log(clone2.obj == user.obj);
console.log(user.obj.size);
console.log(clone2.obj.size);