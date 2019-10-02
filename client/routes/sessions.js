const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/new', function (req, res, next) {
    try {
        res.format({
            // 새로고침에 의한 브라우저 요청
            'text/html': function () {
                const htmlPath = path.join(__dirname + '/../public/html/login.html')
                res.sendFile(htmlPath);
            },
            // AJAX 요청
            'application/json': function () {
                const jsonPath = path.join(__dirname + '/../public/data/login.json')
                const jsonData = fs.readFileSync(jsonPath)
                res.send(JSON.parse(jsonData));
            },
            'default': function () {
                // log the request and respond with 406
                res.status(406).send('Not Acceptable');
            }
        })
    } catch (e) {
        console.error("Response Error:", e);
    }
});

module.exports = router;