const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/find', function (req, res, next) {
    res.format({
        // 새로고침에 의한 브라우저 요청
        'text/html': function () {
            res.sendFile(path.join(__dirname + '/../public/html/find.html'));
        },
        // AJAX 요청
        'application/json': function () {
            res.send(JSON.parse(fs.readFileSync('../public/data/find.json', 'utf8')));
        },
        'default': function () {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    })
});

module.exports = router;