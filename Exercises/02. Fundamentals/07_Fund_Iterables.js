const obj1 = {
    0: 'zero',
    39: 'thirty-nine',
    8: 'eight',
    1: 'one'
}

const obj2 = {
    '0': 'zero',
    '39': 'thirty-nine',
    '8': 'eight',
    '1': 'one'
}

// JS sort the keys because they are numbers even if they were strings
for (let key in obj1)
{
    console.log(`Obj1 key: ${key}`);
}

for (let key in obj2)
{
    console.log(`Obj2 key: ${key}`);
}

// with a + before it keeps the string and it can be converted to a number later on 
const obj3 = {
    '+0': 'zero',
    '+39': 'thirty-nine',
    '+8': 'eight',
    '+1': 'one'
}

for (let key in obj3)
{
    console.log(`Obj3 key: ${key} to number ${+key}`);
}

// ITERABLES

// Now obj1 is an itarable object (array-like)
obj1['length'] = 4;

// Now obj2 is an iterable object
obj2[Symbol.iterator] = () => {
    let firstValue = 0;
    return {
        next: () => {
            return {
                done: firstValue == 10,
                value: firstValue++
            };
        }
    };
}

for (let index of obj2){
    console.log(`Obj2 iterator value: ${index}`);
}

// if the obj is an itarable we can use Array.from to create an array
// the obj is sort by the number keys automatically and the length of the array is 4 but it will have a value in the 8 and 39 position
// but because of the length those positions are cut
const arr1 = Array.from(obj1);
for (let item of arr1){
    console.log(`arr1 item: ${item}`); // eight, thirty-nine, undefined, undefined
}