import Animal from "./Animal"

class Mamifero extends Animal{

    protected patas: number

    constructor(patas: number, idade: number, nome: string, nascimento: string, cor: string, som?: string){
        super(idade, nome, nascimento, cor, som)

        this.patas = patas
    }

    correr(){
        console.log(this.nome+' correu.')
    }
}

export default Mamifero