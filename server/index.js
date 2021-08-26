// ***** ***** *****
// server setups
// ***** ***** *****
const express = require("express");
const app = express();
// 'cors' allows different domain applications to interact each other
// for example, React front-end and PostgreSQL back-end
const cors = require("cors");

// ***** ***** *****
// middleware
// ***** ***** *****
app.use(cors());
// gives an access to the 'request body' from the client side to get the data as JSON
app.use(express.json());

// ***** ***** *****
// server execution
// ***** ***** *****

// const db = require("./db");
// const test = process.env.USER;
// console.log(test);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
