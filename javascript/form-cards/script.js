const articlesLayout = document.querySelector('.layout__articles')
const title = document.querySelector('#title')
const subtitle = document.querySelector('#subtitle')
const description = document.querySelector('#description') 
const form = document.querySelector('.form__create')

let articles = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (title.value && subtitle.value && description.value) {
        let article = {
            title: title.value,
            subtitle: subtitle.value,
            description: description.value
        }
        articles.push(article)
        
    }
    console.log(articles[0].title)
    addArticle()
})

function addArticle() {
    articlesLayout.innerHTML += `
    <article class="layout__card">
                <header class="card__header">
                    <p class="header__author">Mike</p>
                </header>
                <div class="card__content">
                    <div class="content_title">
                        <h2>Hello</h2>
                    </div>

                    <p class="content__description">
                        ${articles[0].description}
                    </p>
                    <button class="content__btn">Read More</button>
                </div>
    </article>
    `
}
