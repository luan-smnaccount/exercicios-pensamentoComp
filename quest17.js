const { perguntaText, rl } = require('./readline')

const validaPlaca = async () => {
    const placa = await perguntaText('Digite a placa para saber se ela se encaixa no padrão: ')

    function validarPlaca(placa) {
        const regex = /^[A-Z]{3}\d{4}$/
        // [A-Z]{3} = Serão permitidas 3 letras entre A-Z
        // \d = Representa todos os números entre 0-9
        // \d{4} = Serão permitidos 4 números entre 0-9
        return regex.test(placa)
    }

    if (validarPlaca(placa)) {
        console.log('Placa se encaixa no padrão');
        rl.close()
        return
    }

    console.log('Placa não se encaixa no padrão');
    rl.close()  
}

validaPlaca()