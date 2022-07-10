import {useState} from 'react'
import '../styles/HomePage.css'

function HomePage(){
    let [valor, setValor] = useState(0)


    return (
        <div id="home-page"> 
            <h1>{valor}</h1>
            <p>Valor do computador</p>

            <div id="row-button">
                <button                      className="action-btn decrease"
                onClick={ () => setValor(valor--)
                }
                >
                    Diminuir
                </button>
                {/* minuto: Ismael->1:01:27  */}
                <button className="action-btn increase"
                onClick={
                    function(){
                        setValor(valor++)
                    }
                }
                >
                    Aumentar
                </button>
            </div>
        </div>
    )
}

export default HomePage