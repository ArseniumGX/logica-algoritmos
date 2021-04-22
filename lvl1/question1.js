/* 
    Escreva uma função para cada uma das quatro operações matemáticas simples:

    - adição,
    - subtração,
    - multiplicação e
    - dividisão
 */

function addict(value1 = 0, value2 = 0) {
    return value1 + value2
}
function subtr(value1 = 0, value2 = 0) {
    return value1 - value2
}
function mult(value1 = 0, value2 = 1) {
    return value1 * value2
}
function div(value1 = 0, value2 = 1) {
    return value1 / value2
}

module.exports = { addict, subtr, mult, div}