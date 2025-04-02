const {pergunta, rl} = require('./readline')

const caixaEletronico = async() => {
    let valorTotal = parseInt(await pergunta('Qual valor para saque: R$'))
    const cedulas = [100, 50, 20, 10, 5]
    const notas = {}

    for (const cedula of cedulas) {
        let qntCedulas = Math.floor(valorTotal/cedula)

        notas[cedula] = qntCedulas
        valorTotal -= qntCedulas*cedula

    }
    
    for (const valorNota in notas) {

        if(notas[valorNota] > 0) {

            while(notas[valorNota] > 0) {
                console.log(valorNota)
                notas[valorNota] -= 1
            }
        }
    }

    if(valorTotal > 0) {
        console.log('Valor resto: ', valorTotal)
    }
    
    rl.close()
}



caixaEletronico()