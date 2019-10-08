const express = require('express');
const router = express.Router();
const passport = require('passport');
const fetch = require('node-fetch')

// Card Create 요청
router.post('/new', function (req, res, next) {
    console.log("api서버에서 받음:", req.body)
    const [sectionId, content, cardSort] = req.body
});

module.exports = router;