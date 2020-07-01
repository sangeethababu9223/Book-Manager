import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import path from 'path';
import cors from 'cors';
import multer from 'multer';
import bobodyParser from 'body-parser';
import './models/connect';
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });  
app.use(express.static('uploads'));
app.use('/images', express.static(__dirname + '/Images'));

var server = app.listen(5000);  
app.use('/v1', indexRouter);
export default app;