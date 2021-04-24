/* 
    Crie duas funções para conversão de temperaturas.

    Uma converterá celsius em fahrenheit e a outra fará o inverso.

    Saiba que 100c é igual a 212f, veja fórmula:

      C          F - 32
   -------  =  ---------    =     C = F - 32 * 5 / 9
      5            9

    F - 32      C
   -------- = ------        =     F = ((C + 32)/5)*9
      9         5

*/

// Converte de fahrenheit /p celcius
function celcius(tempFahrenheit){
   let C = ( tempFahrenheit - 32 ) * 5 / 9
   return C
}

// Converte de celcius /p fahrenheit
function fahrenheit(tempCelcius){
   let F = ( 160 + 9 * tempCelcius ) / 5 // equação obtida usando a regra de três simples
   return F
}

// console.log(celcius(212)) // ok
// console.log(fahrenheit(100)) // ok

module.exports = { celcius, fahrenheit }