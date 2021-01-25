const whoamiContent = `
    <div class="content">
        <div class="whoami__wrapper">
            <div class="whoami__image">
                <img src="./lol.jpg" alt="lol" />
            </div>
            <div class="whoami__description">
                <div class="whoami__description__actual">
                    <h1>Ali Chaayb</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Vitae at voluptatibus corrupti voluptate autem sint nam 
                    veniam libero nisi rem fugit quasi, deserunt, corporis dolor, 
                    nihil ipsum qui tenetur consequatur dignissimos officiis 
                    repellendus illum architecto vel inventore! Enim, rerum?</p>
                </div>
                <div class="whoami__description__footer">
                    <p>Interested?</p>
                    <button class="btn-regular" onClick="changeContent('hireMe')">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    </div>
`
const projectsContent = `
    <h1>This is projects</h1>
`
const servicesContent = `
    <div class="content">
        <ul class="services__wrapper">
            ${
                services.map(service => {
                    return (`
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>`)
                })
            }
        </ul>
    </div>
`
const platformsContent = `
    <h1>This is platforms</h1>
`
const hireMeContent = `
    <h1>This is hire me</h1>
`