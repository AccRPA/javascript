// it starts from the left side, because there is only the operator +, there is no precedence then
console.log(1 + 2 + 3 + '4');
console.log('1' + 2 + 3 + 4);
console.log(1 + 2 + '3' + 4);

// it starts from the left, because there is only the operator +, there is no precedence then
console.log(1 < 2 < 3);
console.log(2 < 1 == 0); // => 2 < 1 = false; Number(false) === 0 = true
console.log(null == 0); // false: because null is not equal to any other types except undefined
console.log(null <= 0); // true: because the greater/lesser comparison converts to Number
//Number(undefined) => Nan
//Number(null) => 0

// String(1) = "1"

// Boolean(NaN, undefined, null, "", 0) => false

// Conversion to String: when printing or with the + operator
// Conversion to Number: for math or expresions
// Conversion to Boolean: Logic operations