const { perguntaText, rl } = require('./readline')

const qntPalavras = async() => {
    const frase = await perguntaText('Escreva uma frase separada por espaços: ')
    const fraseSeparada = frase.split(' ')

    console.log(`A frase tem ${fraseSeparada.length} palavras`);
    rl.close()
}

qntPalavras()