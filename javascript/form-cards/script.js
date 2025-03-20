const articlesLayout = document.querySelector('.layout__articles')
const createArticleBtn = document.querySelector('.create__button')

createArticleBtn.addEventListener("click", () => {
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequuntur optio illo doloribus
                        mollitia fugit minus, debitis atque deserunt quo? Tenetur, odio quasi? Eius ducimus, error aut
                        minima beatae culpa!
                    </p>
                    <button class="content__btn">Read More</button>
                </div>
    </article>
    `
}