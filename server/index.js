const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())


//GET ALL TODOS
app.get("/todos", async (req, res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo")

        res.json(todos.rows)
    } catch (err) {
        console.error(err)
    }
});

//GET A SINGLE TODO
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE tid = $1", [id]);

        res.json(todo.rows)
    } catch (error) {
        console.error(error)
    }
})

//POST A TODO
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);

        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error)
    }
});

//EDIT A TODO
app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const editTodo = await pool.query("UPDATE todo SET description = $1 WHERE tid = $2", [description, id]);

        res.json('todo was updated')
    } catch (error) {
        console.error(error);
    }
})


//DELETE A TODO
app.delete("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTodo = await pool.query("DELETE FROM todo WHERE tid = $1", [id]);

        res.json("todo was deleted")
    } catch (error) {
        console.error(error);
    }
});


app.listen(5000, () => {
    console.log("server has started on port 3000")
});