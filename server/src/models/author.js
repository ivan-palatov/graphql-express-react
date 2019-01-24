const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  name: { type: String, index: true, unique: true, required: true },
  age: Number
});

module.exports = model('Author', authorSchema);
