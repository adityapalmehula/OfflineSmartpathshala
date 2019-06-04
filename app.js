var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router = express.Router();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videoRouter = require('./routes/video');
var classRouter = require('./routes/classes');
var courseRouter = require('./routes/courses');
var syllabusRouter = require('./routes/syllabus');
var descriptRouter = require('./routes/description');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static('public'))
app.use('/videosGet', express.static(path.join(__dirname, 'public','encryptVideos')))
app.use('/pathJson', videoRouter);
app.use('/classes', classRouter);
app.use('/courses', courseRouter);
app.use('/syllabus', syllabusRouter);
app.use('/decription', descriptRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
