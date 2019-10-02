const express = require('express');
const router = express.Router();
const passport =  require('passport');

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
router.post('/create', 
    //인증시도
    passport.authenticate('local', (err, user, info) => {
        if (err) console.log(err)
    }), 
    //성공시
    (req, res, next) => {
        console.log
        res.json({ result: "success!"})
    })

module.exports = router;
