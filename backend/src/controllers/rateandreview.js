import { Ratings } from '../models/ratings';
export const rateBook = async (req, res, next) => {
    const { bookid, userid, value, oldValue } = req.body;
    try {
      const count = await Ratings.countDocuments({bookid : bookid, userid : userid}, function(err, result) {
      });
      if(count==0){
        const m = await Ratings({ bookid, userid, value }).save();
        res.status(201).json({ success: true, book: m });
      }else {
        console.log("oldValue");
        console.log(oldValue);
        console.log("value");
        console.log(value);
        const m = await Ratings.updateOne({ bookid :bookid, userid : userid, value : oldValue },{ bookid : bookid, userid : userid, value : value });;
        res.status(201).json({ success: true, book: m });
      }
    } catch (err) {
      next(err);
    }
  };
  export const avergaeRating = async (req, res, next) => {
    try {
      console.log(req.body);
      const book = req.body;
      const avgRating = await Ratings.aggregate([
        {$match : { bookid : book.bookid}},
        {$group: { _id:null, pop: {$avg:"$value"} } }
      ])
      console.log(avgRating)
      res.status(200).json({ avgRating });
    } catch (err) {
      next(err);
    }
  };