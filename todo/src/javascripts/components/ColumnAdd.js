import Column from './Column'

import '../../stylesheets/ColumnAdd.sass'

const ColumnAddHTML = 
`<div class="column-add">
    <button class="column-add-button">
        Add Column
    </button>
</div>`

const ColumnAdd = {
    init(container){
        this.render(container)
        this.addColumnAddEventListener(container)
    },

    render(container){
        container.innerHTML = ColumnAddHTML
    },

    addColumnAddEventListener(container){
        const addButton = container.querySelector('.column-add-button')
        addButton.addEventListener('click', async (event) => {
            event.preventDefault()

            // 이전 컬럼 컨테이너를 찾아 new sort값을 계산하기
            const sectionSort = this.getNewSectionSort(container)

            // DB에 section create 요청 보내고, section_id를 받음
            const sectionId = await this.submitSectionCreateRequest(sectionSort)

            // 컬럼 생성
            const columnComponent = new Column(container, sectionId, "temp", sectionSort)
            columnComponent.init()
        })
    },

    getNewSectionSort(container){
        const columnContainerCollection = container.getElementsByClassName("column-container")
        
        if (columnContainerCollection.length === 0) return 0;  //만들어진 컬럼이 없는 경우

        const lastContainer = columnContainerCollection.item(columnContainerCollection.length-1)
        let finalSort = Number(lastContainer.getAttribute('data-column-sort'))
        return (finalSort+1)*2
    },

    async submitSectionCreateRequest(sectionSort){
        const result = await fetch('http://localhost:3000/api/section/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sectionSort
            })
        })
        const jsonData = await result.json()
        return jsonData.sectionId
    }
}

export default ColumnAdd