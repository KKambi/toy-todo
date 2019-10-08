const express = require('express');
const router = express.Router();

const CardControllerClass = require('../../src/controller/CardController')
const CardModelClass = require('../../src/model/Card')

// 컨트롤러 생성
const CardModel = new CardModelClass(
    process.env.CARD_TABLE_NAME,
    process.env.CARD_TABLE_PARAMS_NUMBER,
    process.env.CARD_TABLE_PARMAS_LIST
)
const CardController = new CardControllerClass(CardModel)

// Card Create 요청
router.post('/create', async function (req, res, next) {
    const params = {
        section_id: req.body.sectionId,
        writer: req.user.user,
        content: req.body.content,
        sort: req.body.cardSort,
        fileURL: req.body.fileURL || null,
        imageURL: req.body.imageURL || null
    }
    const cardId = await CardController.createCard(params)
    res.json({
        card_id: cardId,
        writer: params.writer
    })
});

module.exports = router;