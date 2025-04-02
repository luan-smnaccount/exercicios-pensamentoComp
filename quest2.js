const {pergunta, rl} = require('./readline')

const imc = async() => {
    const peso = await pergunta('Digite seu peso em quilos: ')
    const altura = await pergunta('Digite sua altura em metros: ')

    const calculoImc = peso / (altura**2)

    if(calculoImc <= 18.5) {console.log('Abaixo do peso')}
    else if(calculoImc > 18.5 && calculoImc <=24.9) {console.log('Peso normal')}
    else if(calculoImc > 24.9 && calculoImc <= 29.9) {console.log('Excesso de peso')}
    else if(calculoImc > 29.9 && calculoImc <= 34.9) {console.log('Obesidade nivel I')}
    else if(calculoImc > 34.9 && calculoImc <= 39.9) {console.log('Obesidade nivel II')}
    else{console.log('Obesidade nivel III')}

    rl.close()
}

imc()