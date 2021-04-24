/*
    Faça um programa para identificar se um número é primo.

    Lembre-se que número primo, é um número natural, maior que 1, apenas 
    divisível por si próprio e pela unidade.

    Comentários:

    Os problemas (e as soluções) envolvendo os números primos são fascinantes 
    e não é objetivo deste artigo esgotar o assunto, muito pelo contrário, o 
    objetivo é simplesmente ser a porta de entrada, o primeiro degrau.

    Outro ponto a comentar é a questão dos testes, você verá que é difícil 
    determinar o quanto de testes seriam suficientes para garantir o correto 
    funcionamento do algoritmo.
*/

function numeroPrimo(value){
    let contador = 0

    for(let i = 0; i <= value; i++){
        if(value % i === 0)
            contador+=1
    }

    return contador == 2 ? true : false
}

module.exports = numeroPrimo