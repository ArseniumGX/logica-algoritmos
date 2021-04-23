/* 
    O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:
        custo final = custo de fábrica +
            (custo de fábrica * percentual do distribuidor) +
            (custo de fábrica * percentual de impostos)

    Considerando os valores abaixo, faça um programa para calcular o custo de fabricação.
    - Custo de fábrica = 10.000,00
    - Percentual do distribuidor = 28%
    - Percentual dos Impostos  = 45%
*/

function custoFabrica(custoFabrica, percentDistr, percentImpos){
    let custoFinal = custoFabrica + ( custoFabrica * percentDistr / 100 ) + ( custoFabrica * percentImpos / 100)
    return custoFinal
}

module.exports = custoFabrica