/* 
    Escreva um algoritmo para mostrar o sucessor e o antecessor de um número qualquer.
*/

function vizinhos(valor){
    let antecessor = valor - 1
    let sucessor = valor + 1

    return [antecessor, sucessor]
}

module.exports = vizinhos