class Animal {
    nome:string = 'Animal estranho'

    constructor(nome){
        console.log("Animal instanciado")
        console.log("Nome do Animal:", nome)

        this.nome = nome
    }

    latir(){
        console.log("som estranho")
    }

    dizerNome(){
        console.log("Olá, meu nome é ", this.nome)
    }
}

export default Animal