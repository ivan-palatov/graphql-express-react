const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: { type: String, index: true, unique: true, required: true },
  genre: String,
  authorId: { type: Schema.Types.ObjectId, required: true }
});

module.exports = model('Book', bookSchema);
