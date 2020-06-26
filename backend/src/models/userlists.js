import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  user: { type: String, required: true  },
  password: { type: String, required: true  },
});

export const UserLists = model('userlists', usersSchema);
