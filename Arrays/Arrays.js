let num = [24, true, "hello", 38];
let num2 = new Array (24, true, "hello", 38);

console.log(num);
console.log(num2);

// adding an element at the end of array
num.push("fruits");
console.log(num);

// add element at the start of array
num.unshift(3);
console.log(num);

// remove an element at the end 
num.pop()
console.log(num);

// remove an element at the start
num.shift();
console.log(num);

// given an array of numbers x return an array even where every item in x is multiplied by 5
// (declare array x ,loop through array x, multiply each item by 5 ,
// create array even and push items multiplied.)
 let x = [5, 8, 2, 87, 33, 67];
 let even = x.map(function(item){
    return item * 5
 })

 console.log(even);

//  let result = x.forEach(function(item){
//     return item * 5
//  })
//  console.log(result);


 let result = []
 x.forEach(function(item){
    result.push(item * 5)
 })
 console.log(result);

//  array concuntination
let newArray = num.concat(x);
console.log(newArray);

// ...spread operator
let tests = ["Angela",...x];
console.log(tests);

let [a, b, ...c] =x;
console.log({a});
console.log({b});
console.log({c});

