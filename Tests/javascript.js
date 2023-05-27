//console.log(add(5, 3));
//var add = (a,b) => { return a + b };

//let matrix = [1,2,3][1,2,3];
//console.log(matrix);

/*
let num = 1.146;
console.log(num.toFixed(6))

function add2(x, y){
    return x + y;
}

console.log(1 == "true");
console.log("1" == true);

let a = "1" - "Greet";
let b = [1,2,3];
console.log(b[b.length]);
*/

let arr1 = [1,2,4];
let arr2 = [4,2,1];

let sortArrayFn = (a, b) => a > b ? 1 : a < b ? -1 : 0;

function identicalArrays (arr1, arr2){
    if ((arr1 && !arr2) || (!arr1 && arr2) || (arr1.length != arr2.length)){
        return false;
    }
    
    // create a copy of the arrays to not modify the inout parameters
    let arr1Sorted = [...arr1];
    let arr2Sorted = [...arr2];
    
    // sort arrays
    arr1Sorted.sort(sortArrayFn);
    arr2Sorted.sort(sortArrayFn);

    // compare them
    return arr1Sorted.reduce((accumulator, item, index) => {
        return accumulator && item === arr2Sorted[index];
    }, true);
}

console.log('are identicals?: ' + identicalArrays(arr1, arr2));
console.log(arr2);

function Duck(wingsNumber){
    this.legs = 2;
    this.name = 'Ducky';

    let wings = wingsNumber;
    this.hasWings = () => wings >= 2;
}

let myDuck = new Duck(2);
myDuck.name = 'Docky';
console.log(myDuck.name);
console.log(myDuck.hasWings());
