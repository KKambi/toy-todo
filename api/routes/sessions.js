const express = require('express');
const router = express.Router();

router.post('/create', function (req, res, next) {
    console.log("--로그인 시도--")
    console.log("body : ", req.body)
    res.json({ result: "success!"})
});

module.exports = router;
