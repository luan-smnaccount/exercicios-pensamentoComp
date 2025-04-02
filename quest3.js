const {pergunta, rl} = require('./readline')

const valorParcela = async() => {
    const valorProduto = await pergunta('Digite o valor do produto: ')
    const quantidadeParcelas = await pergunta('Digite a quantidade de parcelas: ')

    const valorParcela = valorProduto/quantidadeParcelas

    console.log('Valor da parcela: R$',valorParcela.toFixed(2))
    rl.close()
}

valorParcela()