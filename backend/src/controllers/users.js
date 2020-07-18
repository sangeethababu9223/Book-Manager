import { UserLists } from '../models/userlists';

export const addUser = async (req, res, next) => {
  const { fname, lname, user, password } = req.body;
  try {
    const m = await UserLists({ fname, lname, user, password }).save();
    res.status(201).json({ success: true, user: m });
  } catch (err) {
    next(err);
  }
};

export const authenticateLog = (req, res) => {
  const user = req.body;
  res.status(200).json({ success: true, user: user.username });
};
export const logOutUser = (req, res) => {
  console.log('Inside Function');
  req.logout();
  req.session.destroy(function (err) {
    if (err) { return next(err); }
    // The response should indicate that the user is no longer authenticated.
    return res.send({ authenticated: req.isAuthenticated() });
  })
  res.redirect('/')
};
