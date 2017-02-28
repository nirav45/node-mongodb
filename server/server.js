const _ = require('lodash');
const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

//Save new Todos
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((result) => {
    res.send(result);
  }, (error) => {
    res.status(400).send(error);
  });
});

//findall todos
app.get('/todos', (req, res) => {
  Todo.find().then((result) => {
    res.send(result);
  }, (e) => {
    res.status(400).send(e);
  });
});

//FindByID Todos
app.get('/todos/:id', (req, res) => {
    // res.send(req.params);
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

//Delete Todos
app.delete('/todos/:id',(req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((result) => {
    if(!result) {
      return res.status(404).send();
    }
    res.send({result});
  }).catch((e) => {
    return res.status(400).send();
  });
});

//Update Todos
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text','completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new : true}).then((result) => {
    if(!result) {
      return res.status(404).send();
    }
    res.send({result});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email','password']);
  var user = new User(body);

  user.save().then((user) => {
    res.send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
})

const port = 4545;
app.listen(port, () => {
  console.log(`Server started on port no. ${port}`);
});

module.exports = {app};
// var newTodo = new Todo2({
//   text:'Nirav Patel'
// });
//
// newTodo.save().then((docs) => {
//   console.log("Saved Successfully",docs);
// },(error) => {
//   console.log('Unable to save data',error);
// });

// var otherTodo = new Todo2({
//   text:'  Test Message  ',
//   });
//
// otherTodo.save().then((result) => {
//   console.log(JSON.stringify(result, undefined, 2));
// },(error) => {
//   console.log('Unable to save',error);
// });
