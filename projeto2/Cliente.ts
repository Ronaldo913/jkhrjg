import Pagamento from './Pagamento'
import DadosGerais from './DadosGerais'

interface Cliente{
    nome: string,
    saldo: number,
    historicoPagamento: Pagamento[],
    dadosGerais: DadosGerais
}

export default Cliente