import { PropsWithChildren } from 'react'
import '../styles/components/MeuBotao.css'

interface MeuBotaoProps extends PropsWithChildren{
    // children?: ReactNode
    text: string
    onClick(): void
    backgroundColor?: string
    color?: string
}

function MeuBotao({text, backgroundColor, onClick, color}: MeuBotaoProps){
    return(
        <button 
            className="meuBotao"
            style={{
                backgroundColor:backgroundColor,
                color: color

            }}
            onClick={onClick} 
        >
            {text}
        </button>
    ) 
}

export default MeuBotao