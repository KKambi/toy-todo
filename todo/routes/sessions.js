const express = require('express');
const router = express.Router();
const passport = require('passport');

// 로그인 페이지 요청
router.get('/new', function (req, res, next) {
    const signed = req.query.signed;
    res.render('login', { signed });
});

// 로그인 요청
router.post('/create', passport.authenticate('local', {
    failWithError: true
}), (req, res, next) => {
    //성공시!
    res.json({
        "success": '로그인 성공!',
        "session_id": req.user.session_id,
        "is_admin": req.user.is_admin
    })
}, (err, req, res, next) => {
    //실패시!
    res.json({
        "error": '로그인 실패!'
    })
})

// 로그아웃 요청
router.post('/destroy', (req, res, next) => {
    req.logout();
    //TODO: client측 브라우저에서 쿠키를 지우는 코드 필요할까?
    req.session.destroy((err) => res.json({ result: "success" }));
})

module.exports = router;