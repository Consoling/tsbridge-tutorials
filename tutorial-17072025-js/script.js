// Filter Method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

// Reduce Method

const reducernumbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Output: 15

// Object Transformation using Reduce

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const userLookup = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
});

console.log(userLookup);

const cartItems = [
  { id: 1, name: "Apple", price: 1.2, quantity: 3 },
  { id: 2, name: "Banana", price: 0.5, quantity: 5 },
];

const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

console.log(totalPrice); // Output: 8.1

// - accumulator: The accumulated value from the previous iteration.
// - currentValue: The current element being processed.
// - initialValue: An optional value to start the accumulation (if not provided, the first element of the array is used as the initial value).

const array = [1, 2, 3, 4, 5];

array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

//  Add each number one by one to the accumulator, starting from 0.
// - 0 + 1 = 1
// - 1 + 2 = 3
// - 3 + 3 = 6
// - 6 + 4 = 10
// - 10 + 5 = 15

// Find and FindIndex Methods

const findUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const user = findUsers.find((resultUser) => {
  resultUser.id === 2;
});
const userIndex = findUsers.findIndex((resultUser) => resultUser.id === 4);

// console.log(user.name); // Output: { id: 2, name: "Bob" }
if (userIndex < 0) {
  console.log("User not found");
  // console.log(userIndex);
} else if (userIndex >= 0) {
  console.log("User found at index:", userIndex);

  const result = findUsers.filter((resultUser) => {
    let foundINdex = resultUser.id === userIndex;
    if (foundINdex) {
      console.log("User found:", findUsers[userIndex]);
      return findUsers[userIndex];
    }
    return null;
  });

  console.log(result ? result : "User not found"); // Output: { id: 3, name: "Charlie" }
}

// Create a searchbar in HTML and use the above method to display
// the user details based on search input

// 5. Functions and Scope

// 5.1 HIgh Order Functions

// TYpes of HIgh-Order Functions
// Functions that accept functions as params
// Functions that return functions
// Functions that return functions

// Functions that accept functions as params

function withLogging(fn) {
  return function (...args) {
    console.log(`Function called with : ${args}`);

    const result = fn(...args);
    console.log(`Function returned: ${result}`);
    return result;
  };
}

withLogging(function add(a, b) {
  return a + b;
})(5, 10);

// Array method chaining with High-Order Functions
const numbersArray = [1, 2, 3, 4, 5];
const resultArray = numbersArray
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num * 2) // Double the even numbers
  .reduce((acc, num) => acc + num, 0); // Sum the doubled even numbers
console.log(resultArray);



//  Task to use array method chaining rto filter out cart items from array which 

// are above 50,000

