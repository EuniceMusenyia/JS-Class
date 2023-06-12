function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    
};
let person = new Person ('Agnes',23, '4ft');
console.log({person});

let person2 = new Person('Ann', 20, '6ft');

console.log(Person.prototype);
Person.prototype.weight = 50;
console.log({person});
console.log(person.weight);
console.log(person2.weight=60);
 
// check if it belongs to the class
console.log(person instanceof Person);

