const operation = require('./question1')
const assert = require('assert').strict

function main(){
    describe('Deve fazer as quatro operações matemáticas fundamentais', () => {
        it('Adição', () => {
            assert.strictEqual(2, operation.addict(2))
            assert.strictEqual(5, operation.addict(3, 2))
            assert.strictEqual(6, operation.addict(5, 1))
            assert.strictEqual(12, operation.addict(4, 8))
        })
        it('Subtração', () => {
            assert.strictEqual(1, operation.subtr(1))
            assert.strictEqual(-1, operation.subtr(0,1))
            assert.strictEqual(6, operation.subtr(9, 3))
            assert.strictEqual(-4, operation.subtr(4, 8))
        })
        it('Multiplicação', () => {
            assert.strictEqual(4, operation.mult(4))
            assert.strictEqual(12, operation.mult(3, 4))
            assert.strictEqual(0, operation.mult(0, 6))
            assert.strictEqual(15, operation.mult(3, 5))
        })
        it('Divisão', () => {
            assert.strictEqual(7, operation.div(7))
            assert.strictEqual(0, operation.div(0))
            assert.strictEqual(NaN, operation.div(7, 'a'))
            assert.strictEqual(4, operation.div(12, 3))
        })
    })

    console.log('teste')
}

main()