// search for greater or eauls incomes for user
// then asc order and console log them

const incomes = [1000, 4567, 345, 750, 670, 2011, 567]

//let userIncome = parseInt(prompt("What's your income?", 0))

function incomeCheck(incomesArray) {
    for (const income of incomesArray) {
        console.log(income)
    }
}

incomeCheck(incomes)