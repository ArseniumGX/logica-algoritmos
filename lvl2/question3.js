/* 
    Crie uma função que descubra se um valor é maior ou menor que 10.
*/

function maiorMenorDez(value){
    if(value > 10)
        return 'Maior'
    else if(value < 10)
        return 'Menor'
    else
        return 'É 10'
}

module.exports = maiorMenorDez
