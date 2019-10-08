import Card from './Card'

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
        
        <div class="column-header-menu">
            <button class="column-toggle-button" type="button" aria-label="Add a note to this column">
                <svg class="icon icon-plus" viewBox="0 0 12 16" width="12" heigth="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z">
                    </path>
                </svg>
            </button>
            <button class="column-edit-button" type="button" aria-label="Column menu">
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
        this.render()
        this.selfContainer = this.findSelfContainer()
        this.cardAddContainer = this.findCardAddContainer()
        this.cardAddButton = this.findCardAddButton()
        this.cancelButton = this.findCancelButton()
        this.textArea = this.findTextArea()
        this.addToggleEventListener()
        this.addActivateButtonListener()
        this.addCancelButtonListener()
        this.addInsertCardEventListener()
    }

    render(){
        this.mainContainer.insertAdjacentHTML('beforeend', columnHTML(this.sectionId, this.name, this.sort))
    }

    findSelfContainer(){
        // column-container
        return document.querySelector(`[data-section-id="${this.sectionId}"]`);
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

    addToggleEventListener(){
        const toggleButton = this.selfContainer.querySelector(".column-toggle-button")
        toggleButton.addEventListener('click', (event) => {
            if (!event.target) return;
            this.toggleAddSection()
        })
    }

    toggleAddSection(){
        const next = this.cardAddContainer.style.display === 'none' ? 'block' : 'none';
        this.cardAddContainer.style.display = next
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

    addInsertCardEventListener(){
        this.cardAddButton.addEventListener('click', (event) => {
            event.preventDefault()

            // 카드 추가
            const formData = new FormData(this.selfContainer.querySelector('.card-content-form'))
            this.createCard(formData)

            // 텍스트에어리어 초기화
            this.textArea.value = ""
            this.cardAddButton.setAttribute('disabled', "")
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
