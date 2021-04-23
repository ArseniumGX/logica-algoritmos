/* 
    Faça um algoritmo que calcule o reajuste de um salário, utilize os seguintes dados:
    salário  = 1.000,00
    reajuste = 15%,
*/

const reajustar = (salario, percentReajuste) => {
    let reajuste = salario * ( percentReajuste / 100 )
    return reajuste
}

module.exports = reajustar