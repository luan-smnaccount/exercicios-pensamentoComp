const {pergunta, rl} = require('./readline')

function calculadoraIdade(dia, mes, anoNascimento, anoAtual) {
    const dataAniversarioAtual = new Date(anoAtual, mes - 1, dia)
    const dataNascimento = new Date(anoNascimento, mes - 1, dia)

    let idade = anoAtual - dataNascimento.getFullYear()

    let agora = new Date()
    if(dataAniversarioAtual > agora) {
        idade--
    }

    return idade
}

const descobrirIdade = async() => {
    const dia = await pergunta('Digite o dia do seu nascimento: ')
    const mes = await pergunta('Digite o mes do seu nascimento: ')
    const anoNascimento = await pergunta('Digite o dia do seu nascimento: ')
    const anoAtual = await pergunta('Digite o ano atual: ')

    let idade = calculadoraIdade(dia, mes, anoNascimento, anoAtual)

    console.log(`Você tem ${idade} anos`);
    rl.close()
    
}

descobrirIdade()