// var mongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongoDB.');
  }

    console.log('Connected to MongoDB Server.');

    //Delete many
    // db.collection('Todos').deleteMany({
    //   text:'Smit'
    // }).then((result) => {
    //   console.log(result);
    // });

    //Delete One
    // db.collection('Todos').deleteOne({
    //   text:'Smit'
    // }).then((result) => {
    //   console.log(result);
    // });

    //Find One and Delete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
      console.log(result);
    });


   db.close();
});
