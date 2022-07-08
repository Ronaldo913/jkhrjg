import Animal from "./Animal"

class Mamifero extends Animal{
    correr(){
        console.log(this.nome+' correu.')
    }
}

export default Mamifero