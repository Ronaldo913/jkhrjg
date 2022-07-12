import React, {useState} from 'react'
import MeuBotao from '../components/MeuBotao'
import '../styles/HomePage.css'

function HomePage(){
    const [number, setNumber] = useState(0)

    function somar(){
        setNumber(number+1)
    }
    function subtrair(){
        setNumber(number-1)
    }
    function multiplicar(){
        setNumber(number*2)
    }
    return (
        <div id="home-page"> 
            <h2>Contador</h2>
            <span>{number}</span>

            <MeuBotao 
                onClick={somar} text="Somar 1"
            />

            <div className="action-row">
                <MeuBotao 
                  onClick={somar} text="Somar 1"
                  backgroundColor="darkgreen"
                  color="white"
                />
                <MeuBotao 
                  onClick={multiplicar} text="Multiplicar 2"
                  backgroundColor="darkorange"
                  color="white"
                />
                <MeuBotao 
                  onClick={subtrair} text="Subtrair 1"
                  backgroundColor="darkred"
                  color="white"
                />
            </div>
          
        </div>
    )
}

export default HomePage