const { pergunta, perguntaText, rl } = require('./readline')

const calculadores = async () => {
    const numero1 = await pergunta('Digite o primeiro número: ')
    const numero2 = await pergunta('Digite o segundo número: ')
    const operador = await perguntaText('Digite um operador: ')

    if (numero1 == 0 || numero2 == 0 && operador == '/') {
        console.log('Divisão por 0. Tente outro número');
        rl.close()
        return
    }

    console.log(operador == '+' ? `Soma dos números = ${numero1 + numero2}`
        : operador == '-' ? `Substração dos número = ${numero1 - numero2}`
            : operador == '*' ? `Multiplicação dos números = ${numero1 * numero2}`
                : operador == '/' ? `Divisão dos números = ${numero1 / numero2}`
                    : 'Operação Inválida. Tente novamente!');

    rl.close()


}

calculadores()