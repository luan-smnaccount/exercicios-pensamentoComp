const { perguntaText, rl } = require('./readline')

const idade = async() => {
    const dataNascimento = await perguntaText('Informe sua data de nascimento no formato padrão (dd/MM/aa): ')

    const dataDividida = dataNascimento.split('/')
    if(dataDividida.length < 3) {
        console.log('Você não digitou no padrão esperado. Por favor tente novamente!');
        rl.close()
        return
    }

    const idadeUser = 2025-dataDividida[2]
    console.log(`Usuário tem ${idadeUser} anos`);
    rl.close()
    
}

idade()