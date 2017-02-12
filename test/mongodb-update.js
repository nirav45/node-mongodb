// var mongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongoDB.');
  }

    console.log('Connected to MongoDB Server.');

    //Set Operator
    // db.collection('Todos').findOneAndUpdate({
    //   _id:new ObjectID('589d5dd0fd7ced1f380ea125')
    // },{
    //   $set:{
    //     text:'Smit Patel',
    //     completed:true,
    //     text2:'Nirav Patel'
    //   }
    // },{
    //   returnOriginal:false
    // }).then((result) => {
    //   console.log(result);
    // });

    //Incerment Operator
    db.collection('Todos').findOneAndUpdate({
      _id:new ObjectID('589fdd01b7f8788c2b5720e7')
    },{
      $set:{
        text:'Smit',
        completed:true,
        text2:'Nirav Patel'
      },
      $inc:{
        age:1
      }
    },{
      returnOriginal:false
    }).then((result) => {
      console.log(result);
    });
   db.close();
});
