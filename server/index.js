// ***** ***** *****
// server setups
// ***** ***** *****
const express = require("express");
const app = express();

// 'cors' allows different domain applications to interact each other
// for example, React front-end and PostgreSQL back-end
const cors = require("cors");

const pool = require("./db");

// ***** ***** *****
// middleware
// ***** ***** *****
app.use(cors());

// gives an access to the 'request body' from the client side to get the data as JSON
app.use(express.json());

// ***** ***** *****
// routes
// ***** ***** *****
import todos from "@routes/todos";
app.use("/todos", todos);

// ***** ***** *****
// server execution
// ***** ***** *****

// to get process.env variables, need to import/require the file db.js
// const db = require("./db");
// const test = process.env.USER;
// console.log(test);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
