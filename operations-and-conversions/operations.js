const num = 10;
const num2 = 30;

console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num % num2);
console.log(num / num2);

let a= 4;
a ++;
console.log(a);
a--;
console.log(a);

let b = 3;
a+=b;
console.log(a);

let x = 5;
x+=1;
//x = x +1;

console.log(x);

console.log(num>= num2);

// loosely not equal to; loosely equal to
let age = 10;
let age2 = "10";

console.log("loosely equal",age == age2);
console.log("loosely not equal to", age != age2);

// strictly equal

console.log("strictly equal", age === age2);
console.log("strictly not equal", age !== age2);
if (age == age2 && num >= num2){
    console.log("and", true);
}
else{
    console.log("and false", false);
}


// Logical operator 0R - ||- Results to true if either one or all operands is true 
// else false if both are false

    // const nums = 40;
    // const nums2 = 30

    // if (nums>nums2 || age ===age2){
    //     console.log(false);
    // }

    // else{
    //     console.log(true);
    // }