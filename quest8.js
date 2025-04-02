const {pergunta, rl} = require('./readline')

const maiorEmenor = async() => {
    let arrayNumeros = []
    let num

    for(let i = 0; i < 5; i++) {
        num = await pergunta('Digite um número: ')
        arrayNumeros[i] = num
    }

    let maiorNum = arrayNumeros[0]
    let menorNum = arrayNumeros[0]

    for(let i = 0; i<arrayNumeros.length; i++) {
        if(arrayNumeros[i] > maiorNum) {
            maiorNum = arrayNumeros[i]
        }
    }

    for(let i = 0; i<arrayNumeros.length; i++) {
        if(arrayNumeros[i] < menorNum) {
            menorNum = arrayNumeros[i]
        }
    }

    console.log('Maior número encontrado no array: ', maiorNum);
    console.log('Menor número encontrado no array: ', menorNum);
    rl.close()
    
}

maiorEmenor()