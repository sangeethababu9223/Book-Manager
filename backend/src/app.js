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
import passport from 'passport';
import Localpassport from 'passport-local';
import { UserLists } from './models/userlists';


// File upload settings  
const LocalStrategy = Localpassport.Strategy;
const app = express();
const staticapp = express();
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
// const PORT = process.env.PORT || 8080;
// const server = app.listen(PORT, () => {
//   console.log('Connected to port ' + PORT)
// })

// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });
passport.serializeUser(function(user, done) {
  if(user) done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});
passport.use(new LocalStrategy({ passReqToCallback: true },
  function(req, username, password, done) {
    // console.log(req.body.type);
    var type = req.body.type;
      UserLists.findOne({user:username, password:password, type: type}, function(err, result) {
        if(err){
          throw err;
          return done("unauthorized access", false);
        }else if(result){
          return done(null, result);
        }else {
          return done("unauthorized access", false);
        }
      });
  }
));




// error handler
app.use(passport.initialize());
app.use(passport.session());

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
}); 
app.use(express.static('uploads'));
app.use('/uploads', express.static(__dirname + '/uploads'));
var server = app.listen(5000);
app.use('/v1', indexRouter);


export default app;