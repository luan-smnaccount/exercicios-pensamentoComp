const {pergunta, rl} = require('./readline')

const faixaEtaria = async() => {
    const idade = await pergunta('Digite sua idade: ')

    if(idade <= 12) {console.log('Você é uma criança')}
    else if(idade >= 13 && idade <= 17) {console.log('Você é adolescente')}
    else if(idade >= 18 && idade <= 59) {console.log('Você é adulto')}
    else {console.log('Você é idoso')}

    rl.close()
}

faixaEtaria()