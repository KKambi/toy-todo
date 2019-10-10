
const util_dom = {
    hide(element){
        element.style.display = 'none' 
    },

    show(element, display){
        element.style.display = display
    },

    hideForVisibility(element){
        element.style.visibility = 'hidden' 
        element.style.opacity = 0
    },

    showForVisibility(element){
        element.style.visibility = 'visible'
        element.style.opacity = 1
    }
}

export default util_dom
