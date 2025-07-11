// Targetting elements using tag name

document.querySelector("h1").textContent = "DOM Manipulation Example";
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.textAlign = "center";

// Targetting elements using class name

document.querySelector(".span-tag").style.color = "green";
document.querySelector(".span-tag").style.fontSize = "20px";

// Targetting elements using ID

document.getElementById("paragraph").textContent =
  "This paragraph has been modified by JavaScript.";

let nameElement = document.getElementById("user-name");
let profileImage = document.querySelector(".profile-img");
let statusElement = document.querySelector("#status");
nameElement.textContent = "John Doe";
statusElement.innerHTML = "<strong>Online</strong>";

nameElement.style.color = "blue";
nameElement.style.fontSize = "24px";

// profileImage.classList.add("highlight");


// Customizing colors of id card
const mainContainer = document.querySelector("#mainCntnr");
const customColorBtn = document.getElementById("cstmclrbtn");
customColorBtn.addEventListener("click", () => {

    mainContainer.style.backgroundColor = "yellow";
});

// Task :

// create an array of colors and map those colors so that 

// on clicking the customize color button the colors should

// change as per the array

// statusElement.style.color = "green";


const colorChangeBtn = document.getElementById("clrchnge");
colorChangeBtn.addEventListener("click", () => {
    statusElement.classList.remove("green");
})

// Task 2 :

// to apply if else statement and if the inner text inside p tag
// is "Online" then change the color of the status to green
// else if it is "Offline" then change the color to red