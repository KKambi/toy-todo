const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/create', function (req, res, next) {
    console.log("--로그인 시도--")
    res.json({ result: "success!"})
});

module.exports = router;
