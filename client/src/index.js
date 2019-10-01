const IndexController = require('../controllers/IndexController')

const headerContainer = document.getElementById("header-container")
const mainContainer = document.getElementById("main-container")
const controller = new IndexController(headerContainer, mainContainer)
controller.init()