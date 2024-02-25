const inputCheck = document.querySelector('#inputNightMode')
const element = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const mode = inputCheck.checked ? 'dark' : 'light'
    element.setAttribute("data-bs-theme", mode)
})