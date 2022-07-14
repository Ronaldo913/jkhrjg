interface Cliente{
    nome: string
    idade: string
    saldo: number
}

const meuCliente: Cliente = {
    nome: 'nome do meu cliente',
    idade: '30 anos',
    saldo: 2000
}

function imprimir({nome, idade, saldo} : Cliente){
    console.log(idade)
}

imprimir(meuCliente)