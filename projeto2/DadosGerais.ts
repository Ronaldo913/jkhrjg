class DadosGerais{
    private data: string
    private cpf: string
    private idade: number

    constructor(data: string, cpf: string, idade: number){
        this.cpf = cpf
        this.data = data
        this.idade = idade
    }

    get getCpf(){
        return this.cpf
    }

    set setCpf(valor: string){
        this.cpf = valor
    }
}

export default DadosGerais