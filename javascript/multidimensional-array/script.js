const carContainer = document.querySelector("#car__container")

let concessionaire = [
    {
        brand : "mercedes",
        model : ["class a", "class b", "class c"]
    },

    {
        brand : "audi",
        model: ["a3", "a4", "a5"]
    },

    {
        brand : "reanult",
        model: ["clio", "capture", "megane"]
    }
]

function cars() {
    for (const car of concessionaire) {
        const brand = car.brand

        carContainer.innerHTML += `
        <h2>${brand}</h2>
        `
        carContainer.innerHTML += `<ul>`
        
        car.model.forEach(model => {
            carContainer.innerHTML += `<li>${model}</li>`
        })

        carContainer.innerHTML += `</ul>`
        
    }
}

cars()