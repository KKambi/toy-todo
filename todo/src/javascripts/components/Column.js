import '../../stylesheets/column.sass'

import Card from './Card'
import Modal from './Modal'

//util
import util_dom from '../util/util_dom'


const columnHTML = (sectionId, name, sort) => 
`<div class="column-container" data-section-id="${sectionId}" data-column-sort="${sort}">
    <div class="column-header-container">
        <div class="column-header-title">
            <div class="column-card-number">
                0
            </div>
            <div class="column-title">
                ${name}
            </div>
        </div>

        <div class="column-edit-container" style="display: none">
            <button class="column-edit-button">Edit Column</button>
            <button class="column-delete-button">Delete Column</button>
        </div>
        
        <div class="column-header-menu">
            <button class="column-toggle-button" type="button" aria-label="Add a note to this column">
                <svg class="icon icon-plus" viewBox="0 0 12 16" width="12" heigth="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z">
                    </path>
                </svg>
            </button>
            <button class="column-menu-button" type="button" aria-label="Column menu">
                <svg class="icon icon-modify" viewBox="0 0 13 16" width="13" heigth="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="card-add-container" style="display: none;">
        <form method="POST" enctype="multipart/form-data" class="card-content-form">
            <textarea class="card-content" name="content" placeholder="Enter a note" maxlength="500"></textarea>
        </form>
        <div class="card-buttons">
            <button class="card-add-button" disabled="">Add</button>
            <button class="card-cancel-button">Cancel</button>
        </div>
    </div>
</div>`

export default class Column {
    constructor(mainContainer, sectionId, name, sort){
        this.sectionId = sectionId
        this.mainContainer = mainContainer
        this.name = name
        this.sort = sort
        this.cards = []
    }

    init(){
        this.renderMain(columnHTML(this.sectionId, this.name, this.sort))

        this.selfContainer = this.findSelfContainer()
        
        this.modalComponent = new Modal(this.selfContainer, this.sectionId)
        this.renderInMyself(this.modalComponent.HTML(this.name))
        this.modalComponent.init()

        this.toggleButton = this.findToggleButton()
        this.columnMenuButton = this.findColumnMenuButton()
        this.columnEditButton = this.findColumnEditButton()
        this.columnDeleteButton = this.findColumnDeleteButton()
        this.columnEditContainer = this.findColumnEditContainer()
        
        this.cardNumberContainer = this.findCardNumberContainer()
        this.cardAddContainer = this.findCardAddContainer()
        this.cardAddButton = this.findCardAddButton()
        this.cancelButton = this.findCancelButton()
        this.textArea = this.findTextArea()

        this.addToggleEventListener()
        this.addColumnMenuEventListener()
        this.addColumnEditEventListener()
        this.addColumnDeleteEventListener()
        this.addActivateButtonListener()
        this.addCancelButtonListener()
        this.addInsertCardEventListener()
    }

    renderMain(HTML){
        this.mainContainer.lastChild.insertAdjacentHTML('beforebegin', HTML)
    }

    
    findSelfContainer(){
        // column-container
        return document.querySelector(`[data-section-id="${this.sectionId}"]`);
    }

    renderInMyself(HTML){
        this.selfContainer.insertAdjacentHTML('afterbegin', HTML)
    }

    findToggleButton(){
        return this.selfContainer.querySelector('.column-toggle-button')
    }

    findColumnMenuButton(){
        return this.selfContainer.querySelector('.column-menu-button')
    }

    findColumnDeleteButton(){
        return this.selfContainer.querySelector('.column-delete-button')
    }

    findCardNumberContainer(){
        return this.selfContainer.querySelector('.column-card-number')
    }

    findColumnEditContainer(){
        return this.selfContainer.querySelector('.column-edit-container')
    }
    
    findColumnEditButton(){
        return this.selfContainer.querySelector('.column-edit-button')
    }

    findCardAddContainer(){
        return this.selfContainer.querySelector('.card-add-container')
    }

    findCardAddButton(){
        return this.cardAddContainer.querySelector('.card-add-button')
    }

    findCancelButton(){
        return this.cardAddContainer.querySelector('.card-cancel-button')
    }

    findTextArea(){
        return this.cardAddContainer.querySelector('.card-content')
    }

    toggleDisplay(element, display){
        element.style.display === 'none' ? util_dom.show(element, display) : util_dom.hide(element);      
    }

    addToggleEventListener(){
        this.toggleButton.addEventListener('click', () => {
            this.toggleAddSection()
        })
    }

    toggleAddSection(){
        this.toggleDisplay(this.cardAddContainer, 'block')
    }

    addColumnMenuEventListener(){
        this.columnMenuButton.addEventListener('click', () => {
            this.toggleEditSection()
        })
        document.addEventListener('click', (event) => {
            const isClickInside = this.columnEditContainer.contains(event.target) || this.columnMenuButton.contains(event.target)
            if (isClickInside) return
            util_dom.hide(this.columnEditContainer)
        })
    }

    toggleEditSection(){
        this.toggleDisplay(this.columnEditContainer, 'flex')
    }

    addColumnEditEventListener(){
        this.columnEditButton.addEventListener('click', () => {
            this.toggleEditSection()
            this.openModal()
        })
    }

    openModal(){
        this.modalComponent.open()
    }

    closeModal(){
        this.modalComponent.close()
    }

    addActivateButtonListener(){
        this.textArea.addEventListener('input', () => {
            if (this.textArea.textLength > 0) this.cardAddButton.removeAttribute('disabled')
            else this.cardAddButton.setAttribute('disabled', "")
        })
    }

    addCancelButtonListener(){
        this.cancelButton.addEventListener('click', () => {
            this.toggleAddSection()
        })
    }

    addColumnDeleteEventListener(){
        this.columnDeleteButton.addEventListener('click', async () => {
            event.preventDefault()

            // 칼럼 삭제 요청
            await this.deleteColumn()

            // Edit Menbu Close
            this.toggleEditSection()
        })
    }

    async deleteColumn(){
        // DB로 Destroy 명령을 보내는 작업
        await this.submitColumnDeleteRequest(this.sectionId)

        // view단에 변경된 컬럼 제목을 반영하는 작업
        this.deleteColumnInView()
    }

    async submitColumnDeleteRequest(sectionId){
        const result = await fetch('http://localhost:3000/api/section/delete', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sectionId
            })
        })
        const isSuccess = await result.json()
        return isSuccess
    }

    deleteColumnInView(){
        this.selfContainer.remove()
    }

    addInsertCardEventListener(){
        this.cardAddButton.addEventListener('click', async (event) => {
            event.preventDefault()

            // 카드 추가
            const formData = new FormData(this.selfContainer.querySelector('.card-content-form'))
            await this.createCard(formData)

            // 텍스트에어리어 초기화
            this.textArea.value = ""
            this.cardAddButton.setAttribute('disabled', "")

            // 할일개수 변경
            this.cardNumberContainer.textContent = this.cards.length
        })
    }

    async createCard(formData){
        const cardContent = formData.get('content')
        const cardSort = this.cards.length

        // DB로 insert명령을 보내는 작업
        const jsonResponse = await this.submitCardCreateRequest(this.sectionId, cardContent, cardSort)
        
        // view단에 추가된 card를 반영하는 작업
        const cardId = jsonResponse["card_id"]
        const cardWriter = jsonResponse["writer"]
        this.createCardInView(cardId, cardContent, cardSort, cardWriter)
    }

    async submitCardCreateRequest(sectionId, content, cardSort){
        const result = await fetch('http://localhost:3000/api/card/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sectionId,
                content,
                cardSort
            })
        })
        const cardId = await result.json()
        return cardId
    }

    createCardInView(cardId, cardContent, cardSort, cardWriter){
        const newCard = new Card(this.selfContainer, cardId, cardContent, cardSort, cardWriter)
        newCard.init()
        this.cards.push(newCard)
    }
}
