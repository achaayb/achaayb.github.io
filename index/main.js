const hamMenu = document.querySelector('.ham-burger')
const mobileNav = document.querySelector('nav.mobile')
const main = document.querySelector('main')



const toggleMenu = () => {
  hamMenu.classList.toggle('fixed')
    if (hamMenu.classList.contains('open')){
      setTimeout(()=>{
        mobileNav.style.display = 'none'
      },420)
      hamMenu.classList.toggle('open')
      mobileNav.classList.toggle('open')
    } else {
        mobileNav.style.display = 'flex'
        setTimeout(()=>{
            hamMenu.classList.toggle('open')
            mobileNav.classList.toggle('open')
        }, 10)
    }
}

let currentContent = 'whoami'

const changeContent = (to) => {
    currentContent = to
    let newContent
    let links = ['projects', 'hireMe']
    links.map(link => {
        if (to === link) {
            document.querySelector(`li.${link}-link`).classList.add('active')
        } else {
            document.querySelector(`li.${link}-link`).classList.remove('active')
        }
    })
    switch(to) {
        case 'whoami':
          newContent = whoamiContent
          break;
        case 'projects':
          newContent = projectsContent
          break;
        case 'hireMe':
          newContent = contactContent
          break;
        default:
          newContent = `<h1>Whoops, an error occurred!</h1>`
      }
    main.style.opacity = 0
    setTimeout(()=>{
        main.innerHTML = newContent
        main.style.opacity = 1
    }, 400)

}



window.onload = changeContent('whoami')