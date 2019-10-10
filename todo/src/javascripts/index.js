import ColumnAdd from './components/ColumnAdd.js'

const index = {
    init(){
        this.container = document.getElementById("main-container")
        ColumnAdd.init(this.container)
    }
}

index.init()
