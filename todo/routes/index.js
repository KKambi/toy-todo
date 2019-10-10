const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const Index = require('../src/controller/IndexController')
const IndexController = new Index()

const SectionControllerClass = require('../src/controller/SectionController')
const SectionModelClass = require('../src/model/Section')

const SectionController = new SectionControllerClass(
    new SectionModelClass(
        process.env.SECTION_TABLE_NAME,
        process.env.SECTION_TABLE_PARAMS_NUMBER,
        process.env.SECTION_TABLE_PARMAS_LIST
    )
)

router.get('/', async function (req, res, next){
    const allSectionData = await SectionController.getAllSection(req.user.user_id)
    IndexController.renderAllSection(allSectionData)

    const signed = req.cookies[process.env.SESSION_ID_NAME] ? 'true':'false'
    try{
        res.format({
            // 새로고침에 의한 브라우저 요청
            'text/html': function () {
                res.render('index', { signed });
            },
            // AJAX 요청
            'application/json': function () {
                const jsonPath = path.join(__dirname + '/../public/data/index.json')
                const jsonData = fs.readFileSync(jsonPath)
                res.send(JSON.parse(jsonData));
            },
            'default': function () {
                // log the request and respond with 406
                res.status(406).send('Not Acceptable');
            }
        })
    }catch(e){
        console.error("Response Error:", e);
    }
})

module.exports = router;
