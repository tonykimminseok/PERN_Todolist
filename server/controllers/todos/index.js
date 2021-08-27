const pool = require("./../../db.js");

// POST
// Creating a new todo item
const postTodo = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.body.description);

    const { description } = req.body;
    // console.log(description);

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.status(200);
    res.json(newTodo);
  } catch (e) {
    res.status(400);
    console.log(e.message);
  }
};

// GET
// Retrieving all todos from todo table in perntodo database
const getTodos = async (req, res) => {
  // Try and Catch
  // try {
  //   const todos = await pool.query("SELECT * FROM todo");
  //   console.log(todos.rows);
  //   res.json(todos.rows);
  // } catch (error) {
  //   console.log(error.message);
  // }

  // Promise-Then and Catch
  await pool
    .query("SELECT * FROM todo")
    .then(({ rows }) => {
      res.status(200);
      const todos = rows;
      console.log(todos);
      res.json(todos);
    })
    .catch((err) => {
      console.log(err.stack);
      console.log(err.message);
      res.stack(500);
      res.json(err);
    });
};

module.exports = { postTodo, getTodos };
