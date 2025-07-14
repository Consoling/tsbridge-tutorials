// ES6+ Features

// 1. Arrow Functions

function add(x, y) {
  return x + y;
}

console.log(add(2, 3));

const newAdd = (x, y) => {
  return x + y;
};

console.log(newAdd(2, 3));

// Differences between regular functions and arrow functions
// - shorter syntax - less typing, cleaner code
// - no binding of 'this' - arrow functions do not have their own

// 2. Destructuring

const suitcase = { shirts: 5, pants: 3, shoes: 2 };
// const shirts = suitcase.shirts;
// const pants = suitcase.pants;
// const shoes = suitcase.shoes;

// Destructuring assignment

const { shirts, pants } = suitcase;

const userProfile = {
  name: "John Doe",
  age: 30,
  email: "johndoe@me.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  followers: 1000,
  following: 500,
  posts: 200,
  verified: true,
};

const { name, followers, verified } = userProfile;

console.log(name, followers, verified);

// 3. Spread Operator

const originalReceipe = ["flour", "eggs", "milk", "sugar"];

const veganReceipe = [...originalReceipe, "plant milk", "flax eggs"];
console.log(veganReceipe);

// Combining data - merge array and objects easily

const shoppingCart = [
  { id: 1, name: "Apple", price: 1.0 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Orange", price: 0.75 },
];

const addtoCart = (currentCart, newItem) => {
  return [...shoppingCart, newItem];
};

const newCart = addtoCart(shoppingCart, { id: 4, name: "Grapes", price: 2.0 });
console.log(shoppingCart);
console.log(newCart);

const user = { name: "Jane", age: 25 };
const updatedUser = { ...user, city: "New York" };

console.log(updatedUser);

// 4. Functions and Scopes

// 1. High Order functions
// - Functions that take other functions as arguments or return functions

const processFood = (food, method) => {
  console.log(`Processing ${food}`);
  return method(food);
};

const chop = (food) => console.log(`Chopped ${food}`);
const cook = (food) => `Cooked ${food}`;
const slice = (food) => `Sliced ${food}`;

processFood("carrots", chop);

// Example of calculating average using a high order function

const sumOfNumbers = (x, y, z) => {
  return x + y + z;
};

const average = (sumOfNumbers) => {
  return sumOfNumbers / 3;
};

const createNotificationSender = (platform) => {
  return (message, recipient) => {
    console.log(`Sending via ${platform}`);
    console.log(`Message: ${message}`);
    console.log(`Recipient: ${recipient}`);
  };
};


const sendEmail = createNotificationSender("Email")
const sendSms = createNotificationSender("SMS");
const sendPush = createNotificationSender("Push Notification");

sendEmail("Meeting Reminder", "johnemail@me.com");
sendSms("Meeting Reminder", "1234567890");
sendPush("Meeting Reminder", "John Doe");

