import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String },
  ISBN: { type: String },
});

export const BookList = model('booklist', bookSchema);
