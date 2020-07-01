import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import path from 'path';
import cors from 'cors';
// import multer from 'multer';
import bodyParser from 'body-parser';
// import createError from 'createerror';
import './models/connect';

// File upload settings  
const PATH = './uploads'; 

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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Create PORT
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log('Connected to port ' + PORT)
})

// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
}); 

app.use('/v1', indexRouter);
export default app;