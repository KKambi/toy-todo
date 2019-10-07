const columnHTML = (name, sort) => 
`<div class="column-container" data-column-name="${name}" data-column-sort="${sort}">
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
        <textarea class="card-content" name="content" placeholder="Enter a note">
        </textarea>
        <div class="card-buttons">
            <button class="card-add-button">Add</button>
            <button class="card-cancel-button">Cancel</button>
        </div>
    </div>
</div>`

export default class Column {
    constructor(mainContainer, name, sort){
        this.mainContainer = mainContainer
        this.name = name
        this.sort = sort
    }

    init(){
        this.render()
        this.selfContainer = this.findSelf()
        this.addToggleEventListener()
    }

    render(){
        this.mainContainer.insertAdjacentHTML('beforeend', columnHTML(this.name, this.sort))
    }

    findSelf(){
        return document.querySelector(`[data-column-name="${this.name}"]`);
    }

    addToggleEventListener(){
        const toggleButton = this.selfContainer.querySelector(".column-toggle-button")
        toggleButton.addEventListener("click", (event) => {
            if (!event.target) return;
            this.toggleAddSection()
        })
    }

    toggleAddSection(){
        const cardAddContainer = this.selfContainer.querySelector('.card-add-container')
        const next = cardAddContainer.style.display === 'none' ? 'block' : 'none';
        cardAddContainer.style.display =  next
    }
}
