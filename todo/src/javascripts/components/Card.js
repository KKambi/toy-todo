const cardHTML = (content, sort, writer) => 
`<div class="card-container" data-card-sort="${sort}">
    <div class="card-header-container">
        <span class="card-document-icon">
            <svg class="icon icon-document" viewBox="0 0 14 16" width="14" heigth="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z">
                </path>
            </svg>
        </span>
        <div class="card-content-container">${content}</div>
    </div>
    
    <div class="card-file-container">
    </div>
   
    <div class="card-footer-container">
        <div class="card-writer text-gray-light">
            Added By 
            <a class="text-gray-dark">${writer}</a>
        </div>
    </div>
</div>`

export default class Card {
    constructor(columnContainer, id, content, sort, writer){
        this.columnContainer = columnContainer
        this.id = id
        this.content = content
        this.sort = sort
        this.writer = writer
    }

    init(){
        this.render()
        this.selfContainer = this.findSelfContainer()
    }

    render(){
        this.columnContainer.insertAdjacentHTML('beforeend', cardHTML(this.content, this.sort, this.writer))
    }

    findSelfContainer(){
        this.columnContainer.querySelector()
    }

    edit(newContent){
        this.columnContainer.querySelector
    }
}