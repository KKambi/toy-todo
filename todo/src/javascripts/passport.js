// import library
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// import module
const User = require('../model/User')
const Session = require('../controller/SessionController')
const SessionController = new Session(
    new User(
        process.env.USER_TABLE_NAME,
        process.env.USER_TABLE_PARAMS_NUMBER,
        process.env.USER_TABLE_PARMAS_LIST
    )
);

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'user',
        passwordField: 'password',
        session: true,
        passReqToCallback: true
    }, async (req, userId, password, done) => {
        //MySQL DB에서 유저의 정보를 대조하는 코드
        const userRecord = await SessionController.findUser(userId);

        if (!userRecord) {
            return done(null, false, { message: "아이디 혹은 비밀번호가 틀렸습니다." });
        }

        const storedPassword = userRecord.password;
        if (!SessionController.comparePassword(password, userRecord.salt, storedPassword)) {
            return done(null, false, { message: "아이디 혹은 비밀번호가 틀렸습니다." })
        }

        const user = {
            "user": userRecord.user,
            "name": userRecord.name,
            "is_admin": userRecord.is_admin
        }
        //로그인 성공 시, 사용자 정보를 serializeUser 함수에 넘겨줌
        return done(null, user, { message: "로그인 성공!" });
    }))

    //로그인 성공 시 로컬전략콜백에서 리턴받은 2번째 인자를 req.session.passport.user에 저장
    //redis에 저장하는 코드가 아님!!
    passport.serializeUser((user, done) => {
        console.log("세션에 저장:", user)
        done(null, user);
    })

    //서버에 아무 요청이 들어올 때 req.session.passport.user를 인자로 불러옴.
    //redis에서 불러오는 코드가 아님!!
    passport.deserializeUser((user, done) => {
        console.log("세션에서 불러오기:", user)
        done(null, user);
    })
}
