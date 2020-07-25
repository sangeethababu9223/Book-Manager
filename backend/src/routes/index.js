import express from 'express';
import bodyParser from 'body-parser';
import { indexPage, booksPage, addBook, removeBook, updateBook, bookDetails, addUser, authenticateLog, bookUploads } from '../controllers';
import multer from 'multer';
import passport from 'passport';

const indexRouter = express.Router();
const PATH = './uploads'; 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, PATH);
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname)
    }
  });
let upload = multer({
    storage: storage
});

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
      return next()
  }
  return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}
const auth = () => {
  return (req, res, next) => {
      passport.authenticate('local', (error, user, info) => {
          if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
          req.login(user, function(error) {
              if (error) return next(error);
              next();
          });
      })(req, res, next);
  }
}
indexRouter.get('/', indexPage);
indexRouter.get('/books', booksPage);
indexRouter.post('/books', bodyParser.json(), addBook);
indexRouter.post('/bookOne', bodyParser.json(), bookDetails);
indexRouter.post('/removeBooks', bodyParser.json(), removeBook);
indexRouter.post('/updateBooks', bodyParser.json(), updateBook);
indexRouter.post('/users', bodyParser.json(), addUser);
indexRouter.post('/upload', upload.single('file'), bookUploads);
indexRouter.post('/authenticate', auth(), authenticateLog);
export default indexRouter;