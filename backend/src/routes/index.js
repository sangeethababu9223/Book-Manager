import express from 'express';
import bodyParser from 'body-parser';
import { indexPage, booksPage, addBook, addUser, bookUploads } from '../controllers';
import multer from 'multer';
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

indexRouter.get('/', indexPage);
indexRouter.get('/books', booksPage);
indexRouter.post('/books', bodyParser.json(), addBook);
indexRouter.post('/users', bodyParser.json(), addUser);
indexRouter.post('/upload', upload.single('file'), bookUploads);
export default indexRouter;