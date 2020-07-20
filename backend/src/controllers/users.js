import { UserLists } from '../models/userlists';

export const addUser = async (req, res, next) => {
  const { fname, lname, user, password } = req.body;
  try {
    const m = await UserLists({ fname, lname, user, password }).save();
    res.status(201).json({ success: true, user: m.user });
  } catch (err) {
    next(err);
  }
};

export const authenticateLog = (req, res) => {
  const user = req.body;
  res.status(200).json({ success: true, user: user.username });
};
