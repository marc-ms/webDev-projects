let numberButton = document.querySelector("#numberButton")
let log = document.querySelector("#log")

numberButton.addEventListener("click", () => {
    let question = prompt("Write a number, please")
    oddOrEven(question)
})

function oddOrEven(number) {
    if (number % 2 == 0) {
        log.innerHTML = "Even Number"
        console.log("Even Number")
    }
    else {
        log.innerHTML = "Odd Number"
        console.log("Odd Number")
    }
}



