const { perguntaText, rl } = require('./readline')

const verificaSenha = async () => {
    let lerSenha = await perguntaText('Digite a senha para liberar acesso ao sistema: ')
    let tentativa = 0

    if(lerSenha === 'admin123') {
        console.log('Senha correta! Acesso liberado');
        rl.close()
        return
    }

    while(lerSenha !== 'admin123') {
        if(tentativa < 3) {
            lerSenha = await perguntaText('Tente a senha novamente: ')
            tentativa++
        }
        else {
            console.log('Você fez um total de 3 tentativas, sua conta foi bloqueada');
            rl.close()
            return
        }
    }
    
    console.log('Senha correta. Acesso ao sistema liberado');
    rl.close()
    
}

verificaSenha()