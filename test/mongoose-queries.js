const {objectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '58a5bcee621d220ea0366fbe';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

Todo.findById(id).then((todo) => {
  console.log('Todo By ID',todo);
});
