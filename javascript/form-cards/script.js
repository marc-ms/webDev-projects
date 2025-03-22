const articlesLayout = document.querySelector('.layout__articles')
const title = document.querySelector('#title')
const subtitle = document.querySelector('#subtitle')
const description = document.querySelector('#description')
const form = document.querySelector('.form__create')

let new_articles = []

function createArticle() {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        if (title.value && subtitle.value && description.value) {
            let article = {
                title: title.value,
                subtitle: subtitle.value,
                description: description.value
            }
            new_articles.push(article)
            localStorage.setItem("articles", JSON.stringify(new_articles))
            

        }
        console.table(new_articles)
        form.reset()
    })
}


function layoutArticle(articless) {
    layout = `
    <article class="layout__card">
                <header class="card__header">
                    <p class="header__author">${articless.title}</p>
                </header>
                <div class="card__content">
                    <div class="content_title">
                        <h2>${articless.subtitle}</h2>
                    </div>

                    <p class="content__description">
                        ${articless.description}
                    </p>
                    <button class="content__btn">Read More</button>
                </div>
    </article>
    `

    return layout
}

function addArticle() {
    articlesLayout.innerHTML = ""
    new_articles = JSON.parse(localStorage.getItem("articles"))

    if (new_articles.length > 0) {
        new_articles.forEach(article => {
            articlesLayout.innerHTML += layoutArticle(article)
        }

        )
    };
}

addArticle()
createArticle()
