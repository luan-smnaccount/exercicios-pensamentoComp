const {perguntaText, rl} = require('./readline')

const palindromo = async() => {
    const palavra = await perguntaText('Escreva uma palavra para descobrir seu palíndromo: ')

    const arrayPalavra = palavra.split('')
    let arrayPalavraInvers = []

    let i = 0
    for(let j = arrayPalavra.length-1; j>=0; j--) {
        arrayPalavraInvers[i] = arrayPalavra[j]
        i++
    }

    if(arrayPalavraInvers.join('') == palavra) {
        console.log('Palavra é um palíndromo!');
        rl.close()
        return
    }
    console.log('Palavra não é um palíndromo!');
    rl.close()
}

palindromo()