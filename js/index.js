import { handleClick } from "./modules/button.js"

const buttonElement = document.getElementById('btn')
const outputElement = document.getElementById('output')

buttonElement.addEventListener('click', () => {
    handleClick(outputElement)
})
