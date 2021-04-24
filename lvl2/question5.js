/* 
    Utilizando funções, faça um programa que calcule as raízes da equação do 2 grau conforme a fórmula de Bhaskara.
    Lembrando:

    ax² + bx + c = 0
    
    Δ = b² - 4.a.c
    x1    = (-b + √Δ)/2a
    x2    = ( (-b - √Δ)/2a
*/

function raizes(a, b, c){
    let delta = b ** 2 - 4 * a * c
    let x1 = (-b + Math.sqrt(delta)) / 2 * a
    let x2 = (-b - (delta ** (1/2))) / 2 * a

    return [x1, x2]
}

module.exports = raizes