const {pergunta, rl} = require('./readline')

const media = async() => {
    const nota1 = await pergunta('Digite a nota 1: ')
    const nota2 = await pergunta('Digite a nota 2: ')
    const nota3 = await pergunta('Digite a nota 3: ')

    const media = (nota1 + nota2 + nota3) / 3
    console.log(media < 5 ? "Reprovado" : media >= 5 && media <= 6.9 ? "Recuperação" : "Aprovado");
    
    
    rl.close()
}

media()