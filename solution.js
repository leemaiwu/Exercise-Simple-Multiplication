function simpleMultiplication(number) {
    if (number % 2 === 0) {
        number = number * 8
    } else {
        number = number * 9
    }
    return number
} 

console.log(simpleMultiplication(3))


// Alternate Solution

function simplerMultiplication(num) {
    return num * (num % 2 ? 9 : 8)
}

console.log(simplerMultiplication(2))