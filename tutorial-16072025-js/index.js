// Template Literals

// "Hello everyone we are learning essentials of JavaScript for React today!";

// Normal String
"Good afternoon";

// Template Literal

const greeting = new Date().getHours() < 12 ? "morning" : "afternoon";

console.log(`Good ${greeting}`);

// basic Interpolation
const employee = {
  name: "Alex",
  age: 30,
  position: "Software Engineer",
  isActive: false,
};

const randomSentence = document.getElementById("random-sentence");

randomSentence.innerHTML = `Hello ${employee.name}, you are a ${employee.age} years old ${employee.position}.`;

// Dynamic CSS classnames

const className = `button ${employee.isActive ? "active" : "inactive"}`;
const btn = document.getElementById("btn");
btn.className = className;
btn.innerHTML = ` ${employee.isActive ? "active" : "inactive"}`;

// 2.  Destructuring Assignment

// 1. Array Destructuring

// Basic Array Destructuring
const colors = ["red", "green", "blue", "yellow"];
const [firstColor, secondColor, ...restColors] = colors;
console.log(firstColor); // Output: "red"
console.log(secondColor); // Output: "green"
console.log(restColors); // Output: ["blue", "yellow"]

//  skipping elements
const [first, , third] = colors;
console.log(first); // Output: "red"
console.log(third); // Output: "blue"

// Rest Operators

const [primaryColor, ...otherColors] = colors;

console.log(primaryColor); // Output: "red"
console.log(otherColors); // Output: ["green", "blue", "yellow"]

// Swapping variables

let x = 1,
  y = 2;
[x, y] = [y, x];
console.log("X :", x, "Y:", y);

// 2. Object Destructuring

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { age, city, name } = person;

const user = {
  firstname: "Jane",
  age: 25,
  city: "Los Angeles",
};

// const {firstname, ...otherProps}= user;

// console.log(`Name: ${first}`);

// console.log(otherProps)

// Nested Destrcutring

const userProfile = {
  personal: { firstname: "Bob", age: 30 },
  contact: { email: "bob@example.com" },
};

const {
  personal: { firstname },
} = userProfile;

console.log(`Name: ${firstname}`); // Output: "Name: Bob"

// 3. SPread Operator

// 1. Array Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3,4,5,6]

// 2. Object Spread

const testuser = { name: "Alice", age: 25 };

const updatedUser = { ...testuser, city: "New York" };
console.log(updatedUser); // Output: {name: 'Alice', age: 25, city: 'New York'}

// 3. Merging Objects
const userdetails1 = { name: "Alice", age: 25 };
const userdetails2 = { city: "New York", country: "USA" };

const mergedUserDetails = { ...userdetails1, ...userdetails2 };

console.log(mergedUserDetails);

// 4. Array Methods

// i.  map method

const numbers = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 30,
  },
];

const doubleValues = numbers.map((item) => {
  console.log(item.id);
});


//  Task is to create an array of objects with different cart items

// min - 10 items

// {
//   id: 1,
//   name: "Product 1",
//   price: 10.99,
//   quantity: 2, // image: ""
// }


//  render the cart items using DOM manipulation and array map method