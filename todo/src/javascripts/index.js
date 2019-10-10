import ColumnAdd from './components/ColumnAdd.js'
import Column from './components/Column.js'
import Card from './components/Card.js'

class Index {
    constructor(){
        this.sections = {}
    }

    async init(){
        //메인 컨테이너
        this.container = document.getElementById("main-container")
        
        //칼럼 추가 버튼 추가
        ColumnAdd.init(this.container)
        
        //모든 섹션 데이터를 가져와서 렌더링
        const allSectionData = await this.submitAllSectionGetRequest()
        this.renderSection(allSectionData)

        //모든 카드 데이터를 가져와서 렌더링
        const allCardData = await this.submitAllCardGetRequest()
        this.renderCard(allCardData)
    }

    async submitAllSectionGetRequest(){
        const result = await fetch('http://localhost:3000/api/section/all', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const allSectionData = await result.json()
        return allSectionData
    }

    renderSection(allSectionData){
        for (let obj of allSectionData) {
            const mainContainer = this.container
            const sectionId = obj.id
            const name = obj.name
            const sort = obj.sort
            const columnComponent = new Column(mainContainer, sectionId, name, sort)
            columnComponent.init()
            this.sections[sectionId] = columnComponent
        }
    }

    async submitAllCardGetRequest(){
        const result = await fetch('http://localhost:3000/api/card/all', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const allCardData = await result.json()
        return allCardData
    }

    renderCard(allCardData){
        for (let obj of allCardData) {
            const id = obj.id
            const section_id = obj.section_id
            const content = obj.content
            const sort = obj.sort
            const writer = obj.writer
            const columnComponent = this.sections[section_id]
            new Card(columnComponent.selfContainer, id, content, sort, writer).init()
            columnComponent.cardNumber++
        }
        // 할일개수 변경
        for (let key in this.sections){
            this.sections[key].renderNumber()
        }
    }
}

const IndexController = new Index()
IndexController.init()
