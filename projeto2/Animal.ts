class Animal{
    private idade: number
    protected nome: string
    private nascimento: string
    private cor: string
    private som?: string

    constructor(idade: number, nome: string, nascimento: string, cor: string, som?: string){
        this.idade = idade
        this.nascimento = nascimento
        this.nome = nome
        this.cor = cor
        this.som = som
    }

    grunhir(): void{
        if(this.som){
            console.log(this.nome+'gruniu: '+this.som)
        }else{
            console.log(this.nome+'gruniu.')
        }
    }
}

export default Animal