const fs = require("fs");
const path = require("path");

fs.readFile("notes.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const content = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

fs.writeFile("userData.txt", JSON.stringify(content), "utf-8", (err) => {
  err ? console.log(err) : console.log("File written successfully");
});


// Task :

// 1. Read the contents of 'userData.txt' and log it to the console in Object format1.