function insertOne(db) {
    db.collection('Todos').insertOne({
        text: 'Async Await',
        completed: true
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
}

function fetchAll(db) {
    const cursorObject = db.collection('Todos').find();
    cursorObject.toArray().then((docs) => {
        console.log('Todos');
        console.log(docs);
    }, (err) => {
        console.log("Couldn't fetch todos" + err);
    });
}

function fetchQuery(db) {
    const cursorObject = db.collection('Todos').find({completed: false});
    cursorObject.toArray().then((docs) => {
        console.log('Todos');
        console.log(docs);
    }, (err) => {
        console.log("Couldn't fetch todos" + err);
    });
}

function deleteMany(db) {
    const cursorObject = db.collection('Todos').deleteMany({completed: true});
    cursorObject.then((result) => {
        console.log(result);
    });
}

function deleteOne(db) {
    const cursorObject = db.collection('Todos').deleteOne({completed: true});
    cursorObject.then((result) => {
        console.log(result);
    });
}

function findOneAndDelete(db) {
    const cursorObject = db.collection('Todos').findOneAndDelete({completed: false});
    cursorObject.then((result) => {
        console.log(result);
    });
}

module.exports = {
    insertOne,
    fetchAll,
    fetchQuery,
    deleteMany,
    deleteOne,
    findOneAndDelete
}