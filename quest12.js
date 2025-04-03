const { pergunta, perguntaText, rl } = require('./readline')

const precoProduto = async() => {
    const nomeProduto = await perguntaText('Qual o nome do produto comprado? ')
    let precoProduto = await pergunta('Qual o preco pago pelo produto? ')
    const cupom = await perguntaText('Você possui cupom de desconto? ')

    if(cupom.toLowerCase() === 'sim') {
        console.log(`Preço total do produto ${nomeProduto} R$${precoProduto.toFixed(2)} com desconto de 15% = R$${(precoProduto*0.85).toFixed(2)}`);
        rl.close()
        return
    }
    console.log(`Preço total do produto = R$${precoProduto.toFixed(2)}`);
    rl.close()
    
}

precoProduto()