const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{value} is not a valid email.'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    tokens: [{
        access: {
            type: String,
            required:true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

var user = mongoose.model('User', );

module.exports = {
  user
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString()}, 'abc123');
};