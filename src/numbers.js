function add(a, b) {
    // your code here

    let sum = a + b
    return sum
}

function subtract(a, b) {
    // your code here
    less = a - b
    return less
}

function multiply(a, b) {
    // your code here
    multiple = a * b
    return multiple
}

function divide(a, b) {
    // your code here
    dividend = a / b
    return dividend
}

function power(a, b) {
    // your code here
    raisedToPower = Math.pow(a, b)
    return raisedToPower
}

function round(a) {
    // your code here
    rounded = Math.round(a)
    return rounded

}

function roundUp(a) {
    // your code here
    return Math.ceil(a)
}

function roundDown(a) {
    // your code here
    return Math.floor(a)
}

function absolute(a) {
    // your code here
    return Math.abs(a)
}

function quotient(a, b) {
    // your code here
    c = a / b
    if (c > 0) {
        return Math.floor(c)
    }

    if (c < 0) {
        let positiveC = -1 * c // -1 * -4.5= 4.5
        e = Math.floor(positiveC) // Math.floor(4.5)
        return -1 * e

    }


}

function remainder(a, b) {
    // your code here
    modulus = a % b
    return modulus
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    round,
    roundUp,
    roundDown,
    absolute,
    quotient,
    remainder
}