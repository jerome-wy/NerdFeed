const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignUp = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, required: true},
    confirm_password: {type: String, required: true},
    likes: {type: Array, required: false},
    github: {type: String, required: false},
    website: {type: String, required: false}
    
  },
  { timestamps: true }
);

module.exports = mongoose.model('signUp', SignUp);
