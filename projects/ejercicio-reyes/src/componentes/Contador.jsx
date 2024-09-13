import { useState } from "react"

export function Contador(){
    
    const [contador, setContador] = useState(0)

    function aumentarCont () {
        setContador(contador + 1)
    }

    function disminuirCont () {
        setContador(contador - 1)
    }
    
    return(

        <section>
            <div>Contador: {contador}</div>
            <button onClick={aumentarCont}>Aumentar</button>
            <button onClick={disminuirCont}>Disminuir</button>
        </section>

    )
}