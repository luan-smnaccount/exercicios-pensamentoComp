const {pergunta, perguntaText, rl } = require('./readline')

const maisVelho = async() => {

    const pessoas = []

    for(let i=0; i <5; i++) {
        let nomePessoa = await perguntaText(`Qual o nome da pessoa ${i+1}? `)
        let idadePessoa = await pergunta(`Qual a idade da pessoa ${i + 1}? `)

        pessoas.push({nomePessoa, idadePessoa})
    }

    let maisVelho = pessoas.reduce((maisVelho, pessoas) => (pessoas.idadePessoa > maisVelho.idadePessoa ? pessoas : maisVelho), pessoas[0])

    console.log(`A pessoa mais velha é o ${maisVelho.nomePessoa}`);
    rl.close()
}

maisVelho()