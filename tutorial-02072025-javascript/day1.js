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


console.log(typeof (lastIndex))

// OPearators

// 1. Arithmetic Operators
// Used to perform mathematical operations on numbers
// + - * / %

// + plus
// - minus
// * multiply
// / divide
// % modulus (remainder)

let guests = 25;
let pizzaSlices = 8;
let pizzaNeeded = Math.ceil(guests / pizzaSlices); // Rounds up to the nearest whole number
console.log(`You need ${pizzaNeeded} pizzas for ${guests} guests.`);


// 2. Assignment Operators
// Used to assign values to variables

let money = 1000;
money += 500
money -= 500
money *= 2; // money = money * 2
money /= 2; // money = money / 2
money %= 3; // money = money % 3

let phoneStorage = 64; // in GB
phoneStorage -= 10 // Used to store photos
phoneStorage -= 5 // Used to store apps
console.log(`Available storage: ${phoneStorage} GB`); // Available storage: 49 GB


// 3. Comparison Operators

let yourAge = 25;
let minimumAge = 18;


console.log(yourAge > minimumAge); // true
console.log(yourAge < minimumAge); // false
console.log(yourAge >= minimumAge); // true
console.log(yourAge <= minimumAge); // false
console.log(yourAge == minimumAge); // false
console.log(yourAge != minimumAge); // true


// 4. Logical Operators
// Used to combine multiple conditions

let isWeatherGood = true;
let haveFood = true;
let haveFriends = false;

let canHavePicnic = isWeatherGood && haveFood && haveFriends; // true if all conditions are true
console.log(`Can have picnic: ${canHavePicnic}`); // Can have picnic:

let canStayHome = !isWeatherGood || !haveFood || !haveFriends; // true if any condition is false
console.log(`Can stay home: ${canStayHome}`); // Can stay home: true

let shouldBringUmbrella = !isWeatherGood  // true if either condition is true
console.log(`Should bring umbrella: ${shouldBringUmbrella}`); // Should bring umbrella:


//  5. String Operators
// Used to concatenate strings

let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName; // Concatenation

console.log(`Full Name: ${fullName}`); // Full Name: JohnDoe



// Simple Expression
// an expression is like a sentence that produces a value.
// Think of it as a  question that JS answers

// Simple Expression

let sum = 2 + 2
console.log(`Sum: ${sum}`); // Sum: 4

console.log(`Weather Good: ${isWeatherGood}`); // Sum: 4

// let fullName = firstName + ' ' + lastName; 

// Complex Expression


let homework = 85;
let midterm = 92;
let finalExam = 88;
let finalGrade = (homework + midterm + finalExam) / 3; // Average grade
console.log(`Final Grade: ${finalGrade}`); // Final Grade: 88.333


// checking if we can afford somethign as per our balance

let bankBalance = 500;
let itemPrice = 300;
let tax = itemPrice * 0.1; // 10% tax
let totalPrice = itemPrice + tax; // Total price including tax
console.log(`Total Price: ${totalPrice}`); // Total Price: 330

let canAfford = bankBalance >= totalPrice; // true if bank balance is greater than or equal to total price
console.log(`Can afford item: ${canAfford}`); // Can afford item: true


// Planning a road trip

let distanceToDestination = 300; // in km
let carSpeed = 60; // in km/h
let fuelPricePerLitre = 97; // in currency units
let carMileage = 18; // in km/litre

let travelTime = distanceToDestination / carSpeed; // in hours
let fuelNeeded = distanceToDestination / carMileage; // in litres
let totalCost = fuelNeeded * fuelPricePerLitre; // in currency units

console.log(`Travel Time: ${travelTime} hours`); // Travel Time: 5 hours
console.log(`Fuel Needed: ${fuelNeeded} litres`); // Fuel Needed: 16.666 litres
console.log(`Total Cost: ${totalCost} currency units`); // Total Cost:

// Loops 


// 1. For Loop


console.log('starting pushups');
for (let i = 1; pushup = 10; pushup++){
    console.log(`Pushup ${i}`);
}
console.log('Pushups completed!');


let shoppingCart = ["apple", "banana", "orange", "grape", "kiwi"];

// index  = 0;
// total index = 4;
// length starts from 1 
// total length = 5



for (let i = 0; i < shoppingCart.length; i++) {
    console.log(`Item ${i + 1}: ${shoppingCart[i]}`);
}