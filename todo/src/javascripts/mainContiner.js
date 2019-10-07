import Column from './components/Column'
const container = document.getElementById("main-container")
const columnComponent = new Column(container, "테스트", 4)
columnComponent.init()