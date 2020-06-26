import express from 'express';
import bodyParser from 'body-parser';
import { indexPage, booksPage, addBook, addUser } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/books', booksPage);
indexRouter.post('/books', bodyParser.json(), addBook);
indexRouter.post('/users', bodyParser.json(), addUser);
export default indexRouter;