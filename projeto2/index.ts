import Mamifero from "./Mamifero"

const meuMamifero = new Mamifero(
    4,
    20, 
    'gato', 
    '29/11/2004', 
    'branco e preto',
    'aaaaaaaaaaaaaaaaaaah'
)

console.log(meuMamifero)
meuMamifero.correr()
meuMamifero.grunhir()