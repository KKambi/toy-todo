const indexHTML = require('../public/html/indexHTML')

class IndexController{
    constructor(headerContainer, mainContainer){
        this.headerContainer = headerContainer;
        this.mainContainer = mainContainer;
    }

    init(){
        this.headerContainer.addEventListener("click", (event) => {
            if (event.target.tagName === "A"){
                const type = event.target.getAttribute("data-html-type")
                const HTML = indexHTML[type]
                this.render(HTML)
            }
        })
    }

    render(HTML){
        this.mainContainer.innerHTML = HTML;
    }
}

module.exports = IndexController;