const notas: number[] = [8, 9, 8, 9]

const [nota1, nota2] = notas
console.log("Nota 01: ",nota1)
console.log("Nota 02: ",nota2)

function useState(inicial?: any){
    let valor = inicial

    function setValor(novo: any){
        valor = novo
    }

    return [valor, setValor]
}

const [contador, setContador] = useState(0)
