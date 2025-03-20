// search for greater or equal incomes for user
// then asc order and console log them

const incomes = [1000, 4567, 345, 6750, 670, 5011, 567]

const selectedIncomes = []

let userIncome = parseInt(prompt("What's your income?", 0))

function incomeCheck(incomesArray, userInc) {
    for (const income of incomesArray) {
        if (income >= userInc) {
            selectedIncomes.push(income)
        }
    }
    console.log(selectedIncomes)
}

function orderArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

incomeCheck(incomes, userIncome)
orderArray(selectedIncomes)
console.log(selectedIncomes)