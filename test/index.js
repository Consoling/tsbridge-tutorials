


// Delcarations and Initializations:
// 1. a  = 10;
// 2 var a = 10
// 3. let a = 10
// 4. const a = 10
// 5. var a;







var a = undefined;
console.log(a)






var a = "John";


a = " John"


console.log(a)




// console.log(b)

// const b = "Madhav";


// console.log(c)

// let c = "Abhishek"

// {
//     let b = "John";
//     console.log(b)

//     b = "Doe";
//     console.log(b)
// }


// const b = "Madhav";
// console.log(b)






// Scopes:
// Global Scope
// Function Scope
// Block Scope

{

}





// Data Types:

// Primitive Data Types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined


var marks = 60
let name = "Chinki"
const isPassed = true
let rollNo = null
let age; // Undefined

console.log(age)

age = 20



// Non-Primitive Data Types:
// 1. Object
// 2. Array
// 3. Functions

// Object are collections of properties and methods

const car = {
    name: "Audi",
    // name: "BMW",
    model: "M5 CS",
    engine: "4.4L V8",
    year: 2021,
    isElectric: false,
    sound: "",
    start: () => {
        console.log("Car Started");
    },
    stop: () => {
        console.log("Car Stopped");
    },
    accelerate: function () {
        console.log("Car Accelerated");
    }

}

car.start();
car.stop();
car.accelerate();


// car.name = "BMW";
// console.log(car.name);


const companies = {
    bmw: {
        name: "BMW",
        model: "M5 CS",
        year: 2021,
        isElectric: false
    },
    bmw: {
        name: "BMW",
        model: "X5",
        year: 2022,
        isElectric: true
    }
}


Object.freeze(car); // Prevents modification of the object
car.name = "Mercedes"; // This will not change the name
console.log(car.name); // Still "BMW"


const fruits = [
    banana = {
        name: "Banana",
        color: "Yellow",
        taste: "Sweet",
        imgUrl: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, strawBerry = {
        name: "Strawberry",
        color: "Red",
        taste: "Sweet",
        imgUrl: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }, orange = {
        name: "Orange",
        color: "Orange",
        taste: "Citrus",
        imgUrl: "https://plus.unsplash.com/premium_photo-1675237625753-c01705e314bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, papaya = {
        name: "Papaya",
        color: "Orange",
        taste: "Sweet",
        imgUrl: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }];

const student = ["John", "Doe", 20, true, null, undefined];

const carCompanies = [
    bmw = {
        name: "BMW",
        model: "M5 CS",
        year: 2021,
        isElectric: false
    },
    audi = {
        name: "Audi",
        model: "X5",
        year: 2022,
        isElectric: true
    },
    tesla = {
        name: "Tesla",
        model: "Model S",
        year: 2023,
        isElectric: true
    },
    ford = {
        name: "Ford",
        model: "Mustang",
        year: 2020,
        isElectric: false
    },
    toyota = {
        name: "Toyota",
        model: "Camry",
        year: 2021,
        isElectric: false
    }
]



//  Contains elements of different data types
// Ordered collection of items based on index
// Index starts from 0
// Dynamic size
// Heterogeneous data types

// fruits[3] = "Grapes"; // Change the value at index 3
// console.log(fruits[3]); // Output: Grapes

// fruits.push("Pineapple");
// console.log(fruits);

// Output: ["Apple", "Banana", "Orange", "Grapes", "Pineapple"]

// const ul = document.getElementById("list");
// carCompanies.map((car) => {
//     const li = document.createElement("li");

//     li.innerText = `${car.name} - ${car.model} - ${car.year} - ${car.isElectric ? "Electric" : "Non-Electric"}`;
//     ul.appendChild(li);
// }
// )



const ulofFruits = document.getElementById("listOfFruits");
// console.log(ulofFruits);

fruits.map((fruit) => {
    ulofFruits.style.listStyleType = "none"; 
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.margin = "10px";
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = fruit.imgUrl;
    img.alt = fruit.name;
    img.style.width = "100px";
    img.style.height = "100px";
    const span = document.createElement("span");
    span.innerText = `${fruit.name} - ${fruit.color} - ${fruit.taste}`;

    div.appendChild(img);

    div.appendChild(span);
    li.appendChild(div);
    ulofFruits.appendChild(li);
})