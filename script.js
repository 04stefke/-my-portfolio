var darkMode = localStorage.getItem('darkMode')
const darkModeSwitch = document.querySelector('#dark-mode-toggle')

const observer = new IntersectionObserver((entities) => {
    entities.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((element) => observer.observe(element))

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    darkModeSwitch.checked = true
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    darkModeSwitch.checked = false
    localStorage.setItem('darkMode', null)
}

if(darkMode === 'enabled'){
    enableDarkMode()
}
darkModeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode !== 'enabled') {
        enableDarkMode()
    } else{
        disableDarkMode()
    }
})