const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/index', function (req, res, next){
    res.format({
        // 새로고침에 의한 브라우저 요청
        'text/html': function () {
            res.sendFile(path.join(__dirname + '/public/data/index.html'));
        },
        // AJAX 요청
        'application/json': function () {
            res.send(JSON.parse(fs.readFileSync('../public/data/index.json', 'utf8')));
        },
        'default': function () {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    })
})

router.get('/search', function (req, res, next) {
    res.format({
        // 새로고침에 의한 브라우저 요청
        'text/html': function () {
            res.sendFile(path.join(__dirname + '/public/data/service.html'));
        },
        // AJAX 요청
        'application/json': function () {
            res.send(JSON.parse(fs.readFileSync('../public/data/service.json', 'utf8')));
        },
        'default': function () {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    })
});

module.exports = router;
