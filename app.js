var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var pool = require('./bin/db.js');

var index = require('./routes/index');
var logincheck = require('./routes/logincheck');
var demand = require('./routes/demand');
var dayminus1 = require('./routes/dayminus1');
var otd = require('./routes/otd');
var close =  require('./routes/close');
var logout =  require('./routes/logout');
var admin =  require('./routes/admin');


var app = express();

//set loginFlag to 0
global.loginFlag = 0;
global.adminFlag = 0;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/logincheck', logincheck);
app.use('/demand', demand);
app.use('/dayminus1', dayminus1);
app.use('/otd',  otd);
app.use('/close', close);
app.use('/logout', logout);
app.use('/admin', admin);
app.use('/submit', function(req,res) {
    console.log('Data Captured, Name: ' + req.body.nameinput);

    var obj = {};
    var quer3 = "SELECT * FROM test1 WHERE case_status='1'";
    var quer4 = "UPDATE test1 SET CASE_STATUS=1 WHERE OBJID=" + req.body.nameinput;
    console.log('Update Query is [ ' + quer4 + ' ]');
    console.log('Select Query is [ ' + quer3 + ' ]');

    pool.query(quer4, function (err, rows) {
        if (err) {
            throw err;
        } else {
            console.log('Database Updated');
            pool.query(quer3, function (err, rows) {
                if (err) {
                    throw err;
                } else {
                    obj = {db: rows};
                    res.render('dayminus1', obj);
                    console.log('new data displayed');
                    console.log(JSON.stringify(rows));
                }
            });
        }
    });
});

//app.use('/mapupdate', function(req,res) {
  //var checkList = {};
    //function myFunction() {
      //console.log(req.body.filter0);
      //console.log(req.body.filter1);
        //for (i = 0; i <9 ; i++){

           // req.getElementById("filter"+i).name;
           // console.log(req.getElementById("filter"+i).name);
      //req.pause();
     // res.status = 304;
      //res.send('filters being applied');

           // }
    //}
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
