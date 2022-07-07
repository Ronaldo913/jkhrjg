import Pagamento from './Pagamento'
import DadosGerais from './DadosGerais'
import Cliente from './Cliente'

const historicoPagamento: Pagamento[] = []

historicoPagamento.push({
    valor: 30, 
    descricao: 'Pagar conta enem'
})

historicoPagamento.push({
    valor: 80, 
    descricao: 'Pagar conta de luz'
})

const dadosGerais: DadosGerais = {
    cpf: '111.111.111-11',
    idade: 20,
    data: '12/12/1212'
}

const cliente: Cliente = {
    nome: 'Meu nome',
    saldo: 500,
    'historicoPagamento': historicoPagamento,
    dadosGerais
}

console.log(cliente)
console.log(cliente.dadosGerais.cpf)