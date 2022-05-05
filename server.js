const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const todos = require('./todos')

app.use(express.json())

// Get's all todos
app.get("/todo", (req, res) => {
    res.json(todos)
})

// Create a todo
app.post("/todo", (req, res) => {
    const todo = {
        text: req.body.text,
        id: todos.length + 1,
        completed: false,
    }
    todos.push(todo)
    res.json(todos)
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})
