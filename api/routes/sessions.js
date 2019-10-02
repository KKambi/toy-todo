const express = require('express');
const router = express.Router();

const User = require('../src/model/User');
const UserModel = new User(`user`, 4, `user, name, password, is_admin`);

const Session = require('../src/controller/SessionController')
const SessionController = new Session(UserModel);

router.post('/create', function (req, res, next) {
    console.log("--로그인 시도--")
    console.log("body : ", req.body)

    const inputPassword = req.body.password;
    
    //인증작업

    res.json({ result: "success!"})
});

module.exports = router;
