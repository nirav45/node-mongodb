// var mongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongoDB.');
  }

    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').find({
    //   _id:new ObjectID('589f2f2f41215c1c3489dc64')
    // }).toArray().then((docs) => {
    //   console.log('Todos Data');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //   console.log('Unable to fetch Data',err);
    // });

    db.collection('Todos').find({
      text:'Smit'
    }).count().then((count) => {
      console.log('Todos Count :',count);
    },(err) => {
      console.log('Unable to fetch Data',err);
    });

  db.close();
});
