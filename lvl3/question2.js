/* 
    Faça um programa para somar os dígitos de um inteiro

    Sem utilizar recursos de string, ou seja, trabalhe apenas com tipos numéricos.

    Somar dígitos significa que dados um número qualquer, exemplo, 2015, devemos somar seus dígitos:

    2  +  0 +  1 +  5

    O resultado esperado para o número acima seria 8
*/

function somarDigitos(value = 0){
    const soma = (acumulador, valorAtual) => acumulador + valorAtual
    const convertArrayDigits = value.toString().split('')
    const convertArrayDigitsNumber = []
    convertArrayDigits.forEach(element => convertArrayDigitsNumber.push(parseInt(element)))
    
    return convertArrayDigitsNumber.reduce(soma)
}

module.exports = somarDigitos

// obs.: minha solução utilizou recursos de string, isso não era o proposto, mas foi a maneira que conheço


// resolução da acordo ao proposto, não entendi o while, estudar o código depois
/* function somarDigitos(numero) {
    var soma = 0;

    while (numero != 0) {
        soma   += numero % 10;
        numero  = parseInt(numero / 10); // <--- atenção
    }

    return soma;
} */