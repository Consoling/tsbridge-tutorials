// Syntax for printing somethign in console

// console.log("Hello, World!");


// Variables in JavaScript


// 4 types of variable declaration methods

// name = "John"
// var city = "New York";
// let age = 30;
// const isStudent = true;




console.log(firstname)


// TYpe 1 of variable declaration// var keyword
// data stored inside var is gloabally accessible

var firstname = "John";

var firstname = undefined; //step 1
firstname = "John"; //step 2



var city = "New York"; //step 1
console.log(city);
city = "Los Angeles"; // reassigned or updated the variable
console.log(city); //step 2

// Hoisting in Javascript means whenever we declare a varaiable
// it breaks into two parts and first it declares the variable and then in next parts
// it assigns the value to the variable.

// TYpe 2 of variable declaration// let keyword
// data stored inside let is block scoped


{
    let age = 30;
    console.log(age); // 30
    age = 31; // reassigning the value
    console.log(age); // 31

}

// console.log(age); // ReferenceError: age is not defined


// TYpe 3 of variable declaration// const keyword
// data stored inside const is block scoped and cannot be reassigned

{
    const isStudent = true;
    console.log(isStudent); // true
    //  isStudent = false; // TypeError: Assignment to constant variable.
    // console.log(isStudent); // This line will not execute
}

// console.log(isStudent); // ReferenceError: isStudent is not defined


// Data types in JavaScript
// 1. String
let name = "John Doe"; // String

let greeting = 'Hello, '

let message = `name 3678687234`;

// 2. Number
let age = 30; // Number
let pi = 3.14; // Float
let count = -13; // Negative Number

// 3. Boolean
//  either true or false

if (age > 18) {
    let isEligible = true;
} else if (age < 18) {
    let isEligible = false;
}

// 4. Undefined
let name2;
console.log(name2); // undefined

// 5. Null
let name3 = null;
console.log(name3); // null


// Non - primitive data types
// 6. Object
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
}


const car = {
    // Properties
    brand: "BMW",
    model: "Camry",
    year: 2020,
    engine: "V6",
    carType: "Sedan",
    // Methods
    startEngine: function () {
        console.log("Engine started");
    },
    stopEngine: function () {
        console.log("Engine stopped");
    },
    accelerate: function () {
        console.log("Accelerating");
    }
}

console.log(car); // Toyota



car.brand = 'Toyota'; // Toyota
console.log(car); // Camry

Object.freeze(car); // Freezes the object, preventing any changes to its properties

car.brand = 'Honda'; // This will not change the brand
console.log(car.brand); // Toyota


// const bikes = new Object(
//     {

//     }
// )





// Day 2 of JS


// 7. Array

let rawMaterials = [
    "Carrot", "Potato", "Tomato", 23, true, null, undefined, { name: "John" }, [1, 2, 3], "Onion"
]

// An array is a  special type of object that is used to store different types of data

// Key characterisitics of Array

// 1 . Elements : An array is a list of values, known as elements
// 2.  Ordered: Array elements are ordered based on their index
// 3.  Zero Indexed: The first element is at index 0, the second at index 1, and so on
// 4.  Dynamic Size: Arrays can grow or shrink in size as needed
// 5.  Hetregenous: Arrays can store different types of data, including numbers, strings, objects, and even other arrays


// Why use arrays ? 

let cars = ["Toyota", "Honda", "BMW", "Mercedes", "Audi"];
console.log(cars);

//  Javascript Keyword

// const cars = new Array()


// Accessing Array Elements
console.log(cars[0]); // Toyota
console.log(cars[4]); // Honda

cars[1] = "Ford"; // Reassigning the first element
console.log(cars[1]); // Ford

// Converting an array to a string
let carsString = cars.toString();
console.log(carsString); // Toyota, Honda, BMW, Mercedes, Audi


// / Accessing Object Properties

console.log(person.name); 

//  Accessing Arrays

console.log(cars[2]);


// Properties and Methods of Arrays

// 1. length: Returns the number of elements in the array
console.log(cars.length); // 5

// 2. push(): Adds one or more elements to the end of the array
cars.push("Nissan");
console.log(cars); // Toyota, Honda, BMW, Mercedes, Audi, Nissan

// 3. pop(): Removes the last element from the array and returns it
cars.pop();
console.log(cars); // Toyota, Honda, BMW, Mercedes, 
console.log(cars.length)


// Accessing the last element using length

console.log(cars[cars.length - 1]); // Mercedes

let lastElement
let lastIndex = null


console.log(typeof(lastIndex))

// OPearators

// 1. Arithmetic Operators
 // Used to perform mathematical operations on numbers
// + - * / %

// + plus
// - minus
// * multiply
// / divide
// % modulus (remainder)

