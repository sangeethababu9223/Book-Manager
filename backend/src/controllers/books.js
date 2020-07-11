import { BookLists } from '../models/booklists';

export const booksPage = async (req, res, next) => {
  try {
    // console.log(BookLists.find());
    const booklists = await BookLists.find();
    res.status(200).json({ booklists });
  } catch (err) {
    next(err);
  }
};

export const addBook = async (req, res, next) => {
  const { title, author, category, blurb, cover } = req.body;
  try {
    const m = await BookLists({ title, author, category, blurb, cover }).save();
    res.status(201).json({ success: true, book: m });
  } catch (err) {
    next(err);
  }
};
export const updateBook = async (req, res, next) => {
  const resval = req.body;
  console.log(resval);
  try {
    const m = await BookLists({ title, author, category, blurb, cover }).save();
    res.status(201).json({ success: true, book: m });
    console.log(resval);
  } catch (err) {
    next(err);
    console.log(resval);
  }
};

export const removeBook = async (req, res, next) => {
  const coverval = req.body;
  try {
    const m = await BookLists.remove(coverval);
    res.status(201).json({ success: true, book: m });
  } catch (err) {
    next(err);
  }
};
