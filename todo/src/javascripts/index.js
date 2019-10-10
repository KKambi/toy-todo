import ColumnAdd from './components/ColumnAdd.js'
import Column from './components/Column.js'

const index = {
    async init(){
        this.container = document.getElementById("main-container")
        
        ColumnAdd.init(this.container)
        
        const allSectionData = await this.submitAllSectionGetRequest()
        this.renderSection(allSectionData)
    },

    async submitAllSectionGetRequest(){
        const result = await fetch('http://localhost:3000/api/section/all', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const allSectionData = await result.json()
        return allSectionData
    },

    renderSection(allSectionData){
        for (let obj of allSectionData) {
            const mainContainer = this.container
            const sectionId = obj.id
            const name = obj.name
            const sort = obj.sort
            new Column(mainContainer, sectionId, name, sort).init()
        }
    }
}

index.init()
