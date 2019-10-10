import '../../stylesheets/modal.sass'

//util
import util_dom from '../util/util_dom'

const modalHTML = (name) => 
`<div class="modal">
    <div class="modal-content">
        <div class="modal-header">
            Edit ${name}
            <button class="modal-cancel-button" type="button" aria-label="Column menu">
                <svg class="icon icon-cancel" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z">
                    </path>
                </svg>
            </button>
        </div>
        <div class="modal-body">
            <form method="POST" enctype="multipart/form-data" class="modal-update-form">
                <div class="modal-label">Column name</div>
                    <input type="text" maxlength="50" class="modal-update-title" name="modal-update-title" placeholder="Enter a column name (To Do, In Progress, Done)">
                    <button class="modal-update-button" disabled="">Update Column</button>
            </form>
        </div>
    </div>
</div>`

export default class Modal{
    constructor(container){
        this.HTML = modalHTML
        this.container = container
    }

    init(){
        this.self = this.findSelf()
        this.contentContainer = this.findContentContainer()
        this.updateInput = this.findUpdateInput()
        this.updateButton = this.findUpdateButton()
        this.cancelButton = this.findCancelButton()
        this.addActivateButtonListener()
        this.addCancelButtonListener()
    }

    findSelf(){
        return this.container.querySelector('.modal')
    }

    findContentContainer(){
        return this.self.querySelector('.modal-content')
    }

    findUpdateInput(){
        return this.self.querySelector('.modal-update-title')
    }

    findUpdateButton(){
        return this.self.querySelector('.modal-update-button')
    }

    findCancelButton(){
        return this.self.querySelector('.modal-cancel-button')
    }

    addActivateButtonListener(){
        this.updateInput.addEventListener('input', () => {
            if (this.updateInput.textLength > 0) this.updateButton.removeAttribute('disabled')
            else this.updateButton.setAttribute('disabled', "")
        })
    }

    addCancelButtonListener(){
        this.cancelButton.addEventListener('click', () => {
            this.closeModal()
        })
        document.addEventListener('click', (event) => {
            const isClickInside = this.contentContainer.contains(event.target)
            if (isClickInside) return
            util_dom.hide(this.self)
        })
    }

    closeModal(){
        util_dom.hide(this.self)
    }
}