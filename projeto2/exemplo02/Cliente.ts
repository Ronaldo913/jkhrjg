import Pagamento from './Pagamento'
import DadosGerais from './DadosGerais'

class Cliente{
    nome: string
    saldo: number
    historicoPagamento: Pagamento[]
    dadosGerais: DadosGerais

    constructor(nome: string, saldo: number, historicoPagamento: Pagamento[], dadosGerais: DadosGerais){
        this.nome = nome
        this.saldo = saldo 
        this.historicoPagamento = historicoPagamento
        this.dadosGerais = dadosGerais
    }
}

export default Cliente