const { perguntaText, rl } = require('./readline')

const vogaisFrase = async() => {
    const frase = await perguntaText('Escreva uma frase: ')
    const fraseDividida = frase.toLowerCase().split('')
    

    let vogais = {
        'a': 0,
        'e': 0,
        'i':0,
        'o': 0,
        'u': 0
    }

    for (const letra of fraseDividida) {
        if(vogais.hasOwnProperty(letra)) {
            vogais[letra]++
        }
    }

    const totalVogais = Object.values(vogais).reduce((acc, value) => acc + value, 0)
    console.log('Total de vogais presentes na frase: ', totalVogais);
    rl.close()
    
}

vogaisFrase()