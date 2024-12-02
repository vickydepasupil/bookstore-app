import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  cover: { type: String },
  description: { type: String },
  genre: { type: String },
  price: { type: Number },
  stocks: { type: Number },
});

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;
