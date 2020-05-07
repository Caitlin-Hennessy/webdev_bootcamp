var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be blank",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

// looks like collection "todos" is created in todos-api db
// based on the model name?
var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
