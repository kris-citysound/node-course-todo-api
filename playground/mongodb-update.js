// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to MongoDB server');

db.collection('Todos').findOneAndUpdate({
  id: new ObjectID('584859c7e98ae6e994d58b95')
}, {
  $set: {
    completed: true
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});


  // db.close();
});
