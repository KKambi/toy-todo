const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', async function (req, res, next){
    const session_id = req.cookies[process.env.SESSION_ID_NAME];
    const url = process.env.ADMIN_URL
    console.log("in client: req.user:", req.user)
    console.log("in client: req.userInfo:", req.userInfo)

    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cookie': `session_id=${session_id}`
        }, 
        method: "GET"
    });
    const data = await response.json()
    console.log("/admin 결과값: ", data)
})

module.exports = router;
