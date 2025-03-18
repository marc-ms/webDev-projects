const tableContainer = document.querySelector('.tables')
let result = 0

for (let i = 1; i <= 10; i++) {
    tableContainer.innerHTML += `
        <div class="tables__item">
            <h2>Table of ${i}</h2>
            <ul class="tables__list" data-id=${i}></ul>
        </div>
    `

    for (let m = 0; m <= 10; m++) {
        result = i * m
        let tables = document.querySelectorAll('.tables__list') // we must use All to get each table

        tables.forEach(table => {
            let id = table.getAttribute("data-id")
            if (id != i) {
                return
            }
            table.innerHTML += `
            <li>${i}x${m}=${result}</li>
        `
        });

    }
}