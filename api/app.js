const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const passportConfig = require('./src/javascripts/passport');
const flash = require('connect-flash');
const redis = require('redis');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const util_uuid = require('./src/javascripts/util_uuid')

// 환경변수 설정
require('dotenv').config()

// 라우터 설정
const usersRouter = require('./routes/users');
const sessionsRouter = require('./routes/sessions');

const app = express();

// cors 허용
app.use(cors());

// flash 허용
app.use(flash());

// redis 설정
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: 6379
})

// session 설정
app.use(session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    genid: function(req){
        return util_uuid.createUniqueId();  //uuid 라이브러리릍 통해 세션id 반환
    },
    store: new redisStore({
        client: redisClient,
        logErrors: true
    }),
    saveUninitialized: false,
    resave: false
    // cookie: util_cookie.COOKIE_OPTIONS
}))

// passport setup
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
passportConfig();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // print error
    console.error(res.locals.message)
    console.error(res.locals.error)

    // render the error page
    // res.status(err.status || 500);
    // res.render('error');
});

module.exports = app;
