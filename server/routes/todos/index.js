// ***** ***** *****
// setting up router addresses (URL/URI)
// ***** ***** *****

// Method 1
import { Router } from "express";
const router = Router();

// Method2
// const express = require('express')
// const router = express.Router();

// ***** ***** *****
// CRUD operations
// currently at https://xxxxxx.xx/todos/
// ***** ***** *****
import { postTodo } from "@controllers/todos";
router.post("/", postTodo);

export default router;
