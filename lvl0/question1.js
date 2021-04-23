/* 
    Escreva um algoritmo que armazene o valor 999 na variável a e o valor 555 na variável b.
    A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo 
    com que o valor que está em a passe para b e vice-versa.
*/

const assert = require('assert').strict

function main(){
    let a = 333
    let b = 999
    let temp = 0


    temp = a
    a = b
    b = temp

    describe('Dever trocar os valores de a para b e vice-versa', () => {
        it('Testing', () => {
            assert.deepEqual(333, b)
            assert.deepEqual(999, a)
        })
    })
}

main()