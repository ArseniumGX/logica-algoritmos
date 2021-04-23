const dobro = require('./lvl0/question2')
const area = require('./lvl0/question3')
const vizinhos = require('./lvl0/question4')
const media = require('./lvl0/question5')
const dias = require('./lvl0/question6')
const operation = require('./lvl1/question1')
const custoCarro = require('./lvl1/question2')
const juros = require('./lvl1/question3')
const reajust = require('./lvl1/question4')
const assert = require('assert').strict

function main(){
    describe('Deve trazer o dobro de um número', () => {
        let numero1 = 5
        let numero2 = 10
        let numero3 = 15
        let numero4 = 50

        it('Dobro teste', () => {
            assert.deepEqual(10, dobro(numero1))
            assert.deepEqual(20, dobro(numero2))
            assert.deepEqual(30, dobro(numero3))
            assert.deepEqual(100, dobro(numero4))
        })
    })

    describe('Deve calcular a área de um quadrado qualquer', () => {
        let altura = 4
        let largura = 8

        it('Area teste', () => {
            assert.deepEqual(32, area(altura, largura))
            assert.deepEqual(12, area(3, 4))
            assert.deepEqual(8, area(2, 4))
            assert.deepEqual(16, area(4, 4))
        })
    })

    describe('Deve retorna o antecessor e sucessor de um número', () => {
        it('Vizinhos teste', () => {
            assert.deepEqual([2,4], vizinhos(3))
            assert.deepEqual([1,3], vizinhos(2))
            assert.deepEqual([499,501], vizinhos(500))
            assert.deepEqual([998,1000], vizinhos(999))
        })
    })

    describe('Deve calcular a média simples aritmética de 3 valores', () => {
        it('Média teste', () => {
            assert.deepEqual(3, media(2, 6, 1))
        })
    })

    describe('Deve trazer a quantidade de dias em "n" meses', () => {
        it('Dias teste', () => {
            assert.deepEqual(30, dias(1))
            assert.deepEqual(90, dias(3))
            assert.deepEqual(360, dias(12))
        })
    })

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

    describe('Deve calcular o valor de um carro passando todos os percentuais e custo de fabicação individual', () =>{
        let custoFinal = 10000
        let percentDistr = 28
        let percentImpos = 45

        let expected = 17300
        it('Calculo', () => {
            assert.deepEqual(expected, custoCarro(custoFinal, percentDistr, percentImpos))
        })
    })

    describe('Deve calcular o juros simples de um emprestimo', () => {
        let capital = 16000
        let taxa = 4
        let periodo = 4

        let expected = 2560

        it('Calcular juros', () => {
            assert.deepEqual(expected, juros(capital, taxa, periodo))
        })
    })

    describe('Deve calcular o reajuste salarial', () => {
        let salarioAtual = 1000
        let reajusteTaxa = 15

        let expected = 150

        it('Calculo reajuste', () => {
            assert.deepEqual(expected, reajust(salarioAtual, reajusteTaxa))
        })
    })

}

main()