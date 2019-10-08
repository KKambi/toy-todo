const express = require('express');
const router = express.Router();

//서브라우터 설정
const apiCardRouter = require('./card')
const apiPermissionRouter = require('./permission')
const apiSectionRouter = require('./section')
const apiTodoRouter = require('./todo')
const apiUserRouter = require('./user')

router.use('/card', apiCardRouter)
router.use('/permission', apiPermissionRouter)
router.use('/section', apiSectionRouter)
router.use('/todo', apiTodoRouter)
router.use('/user', apiUserRouter)

module.exports = router;
