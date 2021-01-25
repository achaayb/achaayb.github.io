const nav = `
    <ul>
        <li class="projects-link">
            <a href="#" onClick="changeContent('projects');toggleMenu()">
                Projects
                <span></span>
            </a>
        </li>
        <li class="services-link">
            <a href="#" onClick="changeContent('services');toggleMenu()">
                Services
                <span></span>
            </a>
        </li>
        <li class="platforms-link">
            <a href="#" onClick="changeContent('platforms');toggleMenu()">
                Platforms
                <span></span>
            </a>
        </li>
        <li class="hireMe-link">
            <a href="#" onClick="changeContent('hireMe');toggleMenu()">
                Contact
                <span></span>
            </a>
        </li>
    </ul>
`

const navElementD = document.querySelector('nav.desktop')
const navElementM = document.querySelector('nav.mobile')
navElementD.innerHTML = nav
navElementM.innerHTML = nav