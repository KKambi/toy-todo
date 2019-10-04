const express = require('express');
const router = express.Router();
const passport = require('passport');

// 로그인 페이지 요청
router.get('/new', function (req, res, next) {
    const signed = req.query.signed;
    res.render('sessions/new', { signed });
});

// 로그인 요청
router.post('/create', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: 'new?signed=false',
    successFlash: true,
    failureFlash: true 
}))

// 로그아웃 요청
router.post('/destroy', (req, res, next) => {
    req.logout();   // req.user를 삭제
    req.session.destroy()   // redis에서 세션 정보 삭제
    res.clearCookie(process.env.SESSION_ID_NAME)    // browser 쿠키 삭제
    res.redirect('/')
})

module.exports = router;