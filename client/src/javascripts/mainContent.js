const mainContainer = document.getElementById("main-container")

//Login Controller
const Login = require('../controllers/LoginController')
const loginController = new Login(mainContainer)
loginController.init()
