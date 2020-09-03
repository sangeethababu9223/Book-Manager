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