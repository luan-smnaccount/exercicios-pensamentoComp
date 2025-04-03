const { pergunta, rl } = require('./readline')

const convertorMoedas = async() => {
    const valorReal = await pergunta('Digite um valor em reais: ')

    console.log(`Valor em dólar = ${(valorReal/5.66).toFixed(2)}USD`);
    console.log(`Valor em euro = ${(valorReal/6.17).toFixed(2)}EUR`);
    console.log(`Valor em bitcoin = ${(valorReal/478051.40).toFixed(6)}BTC`);
    rl.close()
}

convertorMoedas()