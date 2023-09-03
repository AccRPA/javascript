function getWeakMap(){
    const obj = {
        age: 34
    };
    return new WeakMap().set(obj, 'new');
}

// now how can I delete the obj reference so the weakMap is cleared? It cannot be done
console.log(getWeakMap()); // don't use weakMap if the reference is not known, use Map so it can be cleared

const arr = [1, [2,3], {23: 34}, 34, 234];
console.log(arr.keys());
console.log(arr.values());

for (let pair of arr.entries()){
    console.log(pair[0]); // keys, array index
    console.log(pair[1]); // values
}
