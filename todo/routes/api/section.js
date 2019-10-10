const express = require('express');
const router = express.Router();

const SectionControllerClass = require('../../src/controller/SectionController')
const SectionModelClass = require('../../src/model/Section')

// 컨트롤러 생성
const SectionModel = new SectionModelClass(
    process.env.SECTION_TABLE_NAME,
    process.env.SECTION_TABLE_PARAMS_NUMBER,
    process.env.SECTION_TABLE_PARMAS_LIST
)
const SectionController = new SectionControllerClass(SectionModel)

// Column All Read 요청
router.get('/all', async function (req, res, next) {
    const user_id = req.user.user_id
    const allSectionData = await SectionController.getAllSection(user_id)
    res.json(allSectionData)
});

// Column Create 요청
router.post('/create', async function (req, res, next) {
    const params = {
        user_id: req.user.user_id,
        name: "temp",
        sort: req.body.sectionSort
    }
    const sectionId = await SectionController.createSection(params)
    res.json({
        sectionId
    })
});

// Column Update 요청
router.post('/update/title', async function (req, res, next) {
    const params = {
        section_id: req.body.sectionId,
        title: req.body.title
    }
    const result = await SectionController.updateSection('name', params.title, 'id', params.section_id)
    res.json({
        result
    })
});

// Column Delete 요청
router.post('/delete', async function (req, res, next) {
    const params = {
        section_id: req.body.sectionId
    }
    const result = await SectionController.deleteSection('id', params.section_id)
    res.json({
        result
    })
});

module.exports = router;