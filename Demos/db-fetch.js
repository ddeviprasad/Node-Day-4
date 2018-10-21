const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connection estabilished');

    const db = client.db('TodoApp');

    const cursorObject = db.collection('Todos').find().toArray();
    // console.log('cursorObject: ', cursorObject);
    // The above returns a cursor object
    // toArray returns a promise
    // db.collection('Todos').find({_id: new ObjectID('5bcaa0f01697dca773ed108e')}).toArray((err, docs) => {
    //     if(err) {
    //         return console.log("Couldn't fetch todos" + err);
    //     }
    //     console.log('Todos');
    //     console.log(docs);
    // });
    cursorObject.then((docs) => {
        console.log('Todos');
        console.log(docs);
    }, (err) => {
        console.log("Couldn't fetch todos" + err);
    });

    // client.close();
});