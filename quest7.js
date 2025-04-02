const {pergunta, perguntaText, rl} = require('./readline')

const totalCompra = async() => {
    const nomeProduto = await perguntaText('Qual o nome do produto? ')
    const valorUnit = await pergunta('Qual o preço unitário do produto? ')
    const qntProduto = await pergunta('Qual a quantidade comprada do produto? ')

    let precoFinalProduto = valorUnit * qntProduto
    
    if(precoFinalProduto > 100) {
        precoFinalProduto *= 0.9
        console.log(`Produto: ${nomeProduto}`);
        console.log(`Você consegui um desconto. Valor final a ser pago pelo produto = R$${precoFinalProduto}`);
        rl.close()
        return
    }

    console.log(`Valor final a ser pago pelo produto = R$${precoFinalProduto}`);
    rl.close()
    
}


totalCompra()