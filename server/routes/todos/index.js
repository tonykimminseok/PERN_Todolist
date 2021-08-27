// ***** ***** *****
// setting up router addresses (URL/URI)
// ***** ***** *****

// Method 1 - import
// import { Router } from "express";
// const router = Router();

// Method2 - require
// const express = require("express");
// const router = express.Router();

// Method3 - require 2
const { Router } = require("express");
const router = Router();

// ***** ***** *****
// CRUD operations - Controllers
// currently at https://xxxxxx.xx/todos/
// ***** ***** *****
const { postTodo, getTodos } = require("./../../controllers/todos/index.js");
router.post("/", postTodo);
router.get("/", getTodos);

// export default router;
module.exports = router;
