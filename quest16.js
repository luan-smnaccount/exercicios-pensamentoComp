const { perguntaText, rl } = require('./readline')

const qntNumeros = async() => {
    const numeros = await perguntaText('Digite 5 números e separados por espaços: ')
    const arrayNumeros = numeros.split(' ')

    let qntNumeros = 0

    for (const numero of arrayNumeros) {
        if(numero >= 10 && numero <= 100) {
            qntNumeros++
        }
    }

    console.log(`Existem ${qntNumeros} entre 10 e 100`);
    rl.close()

}

qntNumeros()