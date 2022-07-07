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

const dadosGerais = new DadosGerais('29/11/2004', 'endereco', 20)

const cliente = new Cliente(
    "Meu nome", 
    500, 
    historicoPagamento, 
    dadosGerais
)

console.log(cliente.dadosGerais.getCpf)