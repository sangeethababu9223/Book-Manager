import { Schema, model } from 'mongoose';

const ratingSchema = new Schema({
  bookid: { type: String, required: true },
  userid: { type: String, required: true },
  value: { type: String, required: true  },
});

export const Ratings = model('ratings', ratingSchema);
