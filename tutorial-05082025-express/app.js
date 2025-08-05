require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT;
const { prisma } = require("./lib/prisma");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(morgan("dev"));
app.use(bodyParser.json());

app.post("/api/v1/register", async (req, res) => {
  const { email, firstName, lastName, password } = await req.body;
  if (!email || !firstName || !lastName || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log("Received registration data:", {
    email,
    firstName,
    lastName,
    password,
  });

  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });
  if(!user) {
    return res.status(500).json({ message: "User registration failed" });
  } else {
    return res.status(200).json({ message: "User registered successfully" });
  }
});

app.listen(port, (error) => {
  if (error) {
    console.error(`Error starting server: ${error}`);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
