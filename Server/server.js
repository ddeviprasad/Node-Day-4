const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log("Connection Estabilished");
    // console.log(req.body);
    const todo = new Todo({
        topic: req.body.topic,
        completed: req.body.completed
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos/:topic', (req, res) => {
    Todo.find({topic: req.params.topic}).then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
})

app.listen(3000, () => {
    console.log('listening to port 3000');
});



// const newTodo = new Todo({
//     topic: ' a '
// });

// newTodo.save().then((doc) => {
//     console.log('Document added');
//     console.log(doc);
// }, (err) => {
//     console.log('err: ', err);
// })