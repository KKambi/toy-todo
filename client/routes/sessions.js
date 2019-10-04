const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
const util_cookie = require('../src/javascripts/util_cookie')

router.get('/new', function (req, res, next) {
    const signed = req.query.signed;
    res.render('login', { signed });
});

router.post('/create', async (req, res, next) => {
    const user = req.body.user;
    const password = req.body.password;
    const url = process.env.LOGIN_URL
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        method: "POST",
        body: JSON.stringify({
            "user": user,
            "password": password
        })
    });
    const data = await response.json()
    //로그인 성공시
    if (data.success) {
        console.log("생성새션ID:", data.session_id)
        res.cookie('session_id', data.session_id, util_cookie.COOKIE_OPTIONS)
        res.redirect('/')
    }
    //로그인 실패시
    if (data.error) {
        res.redirect('/sessions/new?signed=false')
    }
})

// POST for logout
router.post('/destroy', async function (req, res, next){
    const url = process.env.LOGOUT_URL
    await fetch(url, { method: "POST" });   //api측 세션 삭제
    res.clearCookie('session_id');     //클라이언트 측 쿠키 삭제
    res.redirect('/')
})

module.exports = router;