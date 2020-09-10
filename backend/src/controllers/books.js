import { BookLists } from '../models/booklists';
import fs from 'fs';
export const booksPage = async (req, res, next) => {
  try {
    // console.log(BookLists.find());
    const booklists = await BookLists.find();
    res.status(200).json({ booklists });
  } catch (err) {
    next(err);
  }
};
export const bookDetails = async (req, res, next) => {
  try {
    // console.log(BookLists.find());
    const bookitem = req.body;
    const booklists = await BookLists.findOne({_id:bookitem._id}, function(err, result) {
      if (err) throw err;
      
    });
    res.status(200).json(booklists);
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
    const m = await BookLists.updateOne(resval.original, resval.updated);;
    res.status(201).json({ success: true, book: m });
    // console.log(resval);
    // console.log('sucsece');
  } catch (err) {
    next(err);
    // console.log(resval);
    // console.log('no sucsece');
  }
};

export const removeBook = async (req, res, next) => {
  const coverval = req.body;
  try {
    const m = await BookLists.deleteOne(coverval);
    res.status(201).json({ success: true, book: m });
  } catch (err) {
    next(err);
  }
  var filePath = path.dirname(require.main.filename)+'/uploads/'+coverval.cover; 
  fs.unlinkSync(filePath);

};


