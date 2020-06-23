import express from 'express';
import bodyParser from 'body-parser';
import { indexPage, booksPage, addBook } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/books', booksPage);
indexRouter.post('/books', bodyParser.json(), addBook);
export default indexRouter;