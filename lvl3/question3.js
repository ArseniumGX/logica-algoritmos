/* 
    Faça um programa para calcular o MDC (máximo divisor comum) entre dois números.

    Aconselho a utilizar o método de divisões sucessivas, pois você verá que a forma 
    como costumamos resolver problemas matemáticos na mão nem sempre é o melhor caminho 
    quando estamos codificando.
*/

function MDC(value1, value2){
    for(let i = 0, j = 0 ; i <= 5, j <= 5 ; i++, j++)
        console.log(value1-=5, value2-=5)
}

console.log(MDC(30, 25))

// Incompleto