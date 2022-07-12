import '../styles/components/MeuBotao.css'

interface MeuBotaoProps{
    text: string
    onClick(): void
    backgroundColor?: string
    color?: string
}

function MeuBotao(props: MeuBotaoProps){
    return(
        <button 
            className="meuBotao"
            style={{
                backgroundColor: props.backgroundColor,
                color: props.color

            }}
            onClick={props.onClick} 
        >
            {props.text}
        </button>
    ) 
}

export default MeuBotao