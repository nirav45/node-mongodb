// var mongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongoDB.');
  }

    console.log('Connected to MongoDB Server.');
  //Insert One Docs
  db.collection('Todos').insertOne({
      text:'Smit',
      text2:'Hello'
  }, (err , res) => {
    if(err){
      return console.log('Unable to insert',err);
    }

        console.log(res.ops[0]._id.getTimestamp());

  });

  db.close();
});
