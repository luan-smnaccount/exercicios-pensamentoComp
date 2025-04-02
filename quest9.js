const {perguntaText, rl} = require('./readline')

const digitosNum = async() => {
    const num = await perguntaText('Digite um número: ')
    const arrayNum = num.split('')
    console.log(`Quantidade de digitos do número ${num}: ${arrayNum.length}`);
    rl.close()
}

digitosNum()