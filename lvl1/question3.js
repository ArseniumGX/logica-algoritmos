/* 
    Faça um programa para calcular o juros simples segundo a fórmula abaixo.
    J = C.i.n

    Onde:

    J = juros,
    C = capital,
    i = taxa de empréstimo
    n = períodos

    Vamos imaginar o seguinte cenário: um empréstimo de R$ 16.000,00 sobre a taxa de 4% durante 4 meses.

*/

function jurosSimples(capital, taxa, periodo){
    let juros =  capital * ( taxa / 100 ) * periodo
    
    return juros
}

module.exports = jurosSimples