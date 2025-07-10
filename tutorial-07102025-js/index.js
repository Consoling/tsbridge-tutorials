function sum(a, b) {
  let result = a + b;
  console.log(`Sum: ${result}`); // Sum: 15
}

// using arrow function

const sumArrow = (a, b) => {
  let result = a + b;
  console.log(`Sum: ${result}`); // Sum: 15
};

sum(5, 10); // Sum: 15
sumArrow(5, 10); // Sum: 15

// Real ife functions examples:

let bankAccount = {
  balance: 1000,

  deposit: function (amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
  },

  withdraw: function (amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}. New balance: ${this.balance}`);
    }
  },

  checkBalance: function () {
    console.log(`Current balance: ${this.balance}`);
  },
};

console.log(bankAccount.balance); // 1000
bankAccount.deposit(300);

bankAccount.withdraw(200);

bankAccount.checkBalance();

// Objects and Arrays

// Working with complex data

// Student management system
let classroom = {
  name: "Math 101",
  students: [
    { name: "Alice", age: 20, grades: [85, 92, 34] },
    { name: "Bob", age: 22, grade: [98, 92, 88] },
    { name: "Charlie", age: 21, grade: [75, 82, 90] },
  ],
  addStudent: function (student) {
    this.students.push(student);
    console.log(`Added student: ${student.name}`);
  },
};
classroom.addStudent({ name: "David", age: 23, grades: [88, 90, 95] });
console.log(`Classroom: ${classroom.students.map((s) => s.name).join(", ")}`); // Classroom: Alice, Bob, Charlie, David

// Array Methods are powerful tools

// E-commerce product filter

let products = [
  { name: "IPhone 16", price: 80000, category: "electronics" },
  { name: "Nike Shoes", price: 10000, category: "clothing" },
  { name: "Coffee Mug", price: 2000, category: "home" },
  { name: "Samsung TV", price: 120000, category: "electronics" },
];

// Filter expensive electronics

let expensiveElectronics = products
  .filter((product) => product.category === "electronics")
  .filter((product) => product.price > 50000);

console.log(
  `Expensive Electronics: ${expensiveElectronics.map((p) => p.name).join(", ")}`
); // Expensive Electronics: IPhone 16, Samsung TV

let productsNames = products.map((product) => product.name);

console.log(`Product Names: ${productsNames.join(", ")}`); // Product Names: IPhone 16, Nike Shoes, Coffee Mug, Samsung TV

// find total value of all products
let totalValue = products.reduce((sum, product) => sum + product.price, 0);

// DOM Manipulation

// Select an element by ID
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});

console.log(document);
