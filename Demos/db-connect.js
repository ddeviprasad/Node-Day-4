const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connection estabilished');

    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text: 'Async Await',
        completed: true
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});