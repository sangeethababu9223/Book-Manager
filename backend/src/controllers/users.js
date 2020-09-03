import { UserLists } from '../models/userlists';

export const addUser = async (req, res, next) => {
  const { fname, lname, user, password,type } = req.body;
  try {
    const m = await UserLists({ fname, lname, user, password,type }).save();
    res.status(201).json({ success: true, user: m.user, id : m._id });
  } catch (err) {
    next(err);
  }
};

export const authenticateLog = (req, res) => {
  const user = req.user;
  res.status(200).json({ success: true, user: user.user, id : user._id });
};
