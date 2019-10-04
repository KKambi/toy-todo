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

// (async() => {
//     try{
//         console.log(await SessionController.findUser('admin'))
//     } catch (e){
//         console.log(e)
//     }
// })();

module.exports = () => {
    try {
        passport.use(new LocalStrategy({
            usernameField: 'user',
            passwordField: 'password',
            session: true,
            passReqToCallback: true
        }, async (req, user, password, done) => {
            //MySQL DB에서 유저의 정보를 대조하는 코드
            const userRecord = await SessionController.findUser(user);

            if (!userRecord) {
                return done(null, false, { message: "존재하지 않는 아이디입니다." });
            }

            const storedPassword = userRecord.password;
            if (!SessionController.comparePassword(password, userRecord.salt, storedPassword)) {
                return done(null, false, { message: "아이디 혹은 비밀번호가 틀렸습니다." })
            }
            
            const userInfo = {
                "session_id": req.sessionID,
                "user": userRecord.user,
                "name": userRecord.name,
                "is_admin": userRecord.is_admin
            }
            //로그인 성공 시, 사용자 정보를 serializeUser 함수에 넘겨줌
            return done(null, userInfo, { message: "로그인 성공!" });
        }))

        //로그인 성공 시 사용자 정보를 세션에 저장
        passport.serializeUser((userInfo, done) => {
            done(null, userInfo);
        })

        //인증 후, 페이지 접근시 마다 사용자 정보를 저장된 세션에서 읽어옴.
        passport.deserializeUser((userInfo, done) => {
            done(null, userInfo);
        })

    } catch (e) { console.log("로컬전략에러: ", e) }
}
