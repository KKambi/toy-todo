const header_container = document.getElementById("header-container");
header_container.innerHTML = 
    `<nav id="navigation-container">
        <a href="/">
            HOME
        </a>
        <a href="/users/find">
            훔쳐보기
        </a>
        <a href="/sessions/new">
            로그인
        </a>
    </nav>`

const navigationController = require('../controllers/NavigationController')
const headerContainer = document.getElementById("header-container")
const mainContainer = document.getElementById("main-container")
const controller = new navigationController(headerContainer, mainContainer)
controller.init()