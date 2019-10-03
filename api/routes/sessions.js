const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../src/model/User');
const Session = require('../src/controller/SessionController')
const SessionController = new Session(
    new User(
        process.env.USER_TABLE_NAME,
        process.env.USER_TABLE_PARAMS_NUMBER,
        process.env.USER_TABLE_PARMAS_LIST
    )
);

// router.post('/create', function (req, res, next) {
//     console.log("--로그인 시도--")
//     console.log("body : ", req.body)

//     res.json({ result: "success!"})
// });

// POST for login
// router.post('/create', 
//     //인증시도
//     passport.authenticate('local', { 
//         failureFlash: true,
//         successFlash: true
//     }), 
//     //성공시
//     (req, res, next) => {
//         console.log("로그인 성공!")
//         const flashMessage = req.flash()
//         res.json(flashMessage)
//     }
// )

router.post('/create', passport.authenticate('local', {
    successFlash: true,
    failureFlash: true,
    failWithError: true
}), (req, res, next) => {
    //성공시!
    console.log(req.flash())
}, (err, req, res, next) => {
    //실패시!
    console.log(req.flash())
})

module.exports = router;
