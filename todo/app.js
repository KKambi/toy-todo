// 기본 모듈
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');

// 패스포트 모듈
const passport = require('passport');
const passportConfig = require('./src/javascripts/passport');

// 플래쉬 메세지 모듈
const flash = require('connect-flash');

// 세션 및 redis 모듈
const redis = require('redis');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: 6379,
    prefix: 'todo_'
})

// 유틸 라이브러리
const util_uuid = require('./src/javascripts/uitl/util_uuid')
const util_cookie = require('./src/javascripts/uitl/util_cookie')

// 라우터 설정
const indexRouter = require('./routes/index');
const sessionsRouter = require('./routes/sessions')
const usersRouter = require("./routes/users")
const adminRouter = require("./routes/admin")

// 앱 시작
const app = express();

// 환경변수 설정
require('dotenv').config();

// session 설정
app.use(session({
    name: process.env.SESSION_ID_NAME,
    secret: process.env.SESSION_SECRET,
    genid: function (req) {
        return util_uuid.createUniqueId();  //uuid 라이브러리릍 통해 세션id 반환
    },
    store: new redisStore({
        client: redisClient
    }),
    saveUninitialized: false,   //true를 주면 세션정보가 계속 생성됨. false가 경쟁상태를 방지한다.
    resave: false,
    cookie: util_cookie.COOKIE_OPTIONS,
}))

// 패스포트 설정
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
passportConfig();

// flash 허용
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/sessions', sessionsRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
