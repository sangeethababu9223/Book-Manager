import { Schema, model } from 'mongoose';

const booklistsSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String },
  ISBN: { type: String },
});

export const BookLists = model('booklists', booklistsSchema);
