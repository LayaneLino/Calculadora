// Calculadora------------------------------------------------------------------------------------------
const rLine = require('readline-sync')

const chamandoSoma = require('./soma')
const chamandoSub = require('./sub')
const chamandoMult = require('./mult')
const chamandoDiv = require('./div')

let opcao, numeroA, numeroB
do {
    console.log('--------- CALCULADORA --------- \n 1. Somar \n 2. Subtrair \n 3. Multiplicar \n 4. Dividir \n 5. Encerrar');
    opcao = rLine.questionInt("Escolha uma opção: ");

    if (opcao < 5 && opcao > 0) {
        numeroA = rLine.questionFloat('Informe um número: ');
        numeroB = rLine.questionFloat('Informe outro número: ');
    }

    switch(opcao) {
        case 1:
            console.log(`R: ${numeroA} + ${numeroB} = ${chamandoSoma(numeroA, numeroB)}`)
            break;
        case 2:
            console.log(`R: ${numeroA} - ${numeroB} = ${chamandoSub(numeroA, numeroB)}`)
            break;
        case 3:
            console.log(`R: ${numeroA} * ${numeroB} = ${chamandoMult(numeroA, numeroB)}`)
            break;
        case 4:
            console.log(`R: ${numeroA} : ${numeroB} = ${chamandoDiv(numeroA, numeroB)}`)
            break;
    }
} while (opcao < 5 && opcao > 0);

if (opcao == 5) {
console.log('Obrigada por usar a calculadora!');
} else {
    console.log('Opção inválida.');
}
