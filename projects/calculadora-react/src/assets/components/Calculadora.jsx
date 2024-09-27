import { useState } from "react"

export function Calculadora() {

    const [value, setValue] = useState('')

    function handleValue (event){

        console.log(`Valor: ${value}`)
        console.log(`Evento: ${event.target.value}`)
        const newValue = event.target.value
        const lastValue = value.toString().charAt(value.length - 1)
        
        console.log(`Ùltimo valor: ${lastValue}`)

        if (['*', '-', '/', '+','='].includes(lastValue) && ['*', '-', '/', '+','='].includes(newValue)) {
            return
        }

        
        setValue((prevValue) => prevValue + newValue)
        console.log('click')

        
    }

    function calculateTotal(){
        setValue(eval(value))
    }

    function limpiar(){
        setValue('')
    }

    return(
        <section className='seccion-calculadora'>
        <input type='text' value={value} className='input-calculadora' readOnly></input>
        <div className='container-calculadora'>
            <button className='boton-calculadora' value='7' onClick={handleValue}>7</button>
            <button className='boton-calculadora' value='8' onClick={handleValue}>8</button>
            <button className='boton-calculadora' value='9' onClick={handleValue}>9</button>
            <button className='boton-calculadora' value='/' onClick={handleValue}>/</button>
            <button className='boton-calculadora' value='4' onClick={handleValue}>4</button>
            <button className='boton-calculadora' value='5' onClick={handleValue}>5</button>
            <button className='boton-calculadora' value='6' onClick={handleValue}>6</button>
            <button className='boton-calculadora' value='*' onClick={handleValue}>X</button>
            <button className='boton-calculadora' value='1' onClick={handleValue}>1</button>
            <button className='boton-calculadora' value='2' onClick={handleValue}>2</button>
            <button className='boton-calculadora' value='3' onClick={handleValue}>3</button>
            <button className='boton-calculadora' value='-' onClick={handleValue}>-</button>
            <button className='boton-calculadora' value='0' onClick={handleValue}>0</button>
            <button className='boton-calculadora' value='.' onClick={handleValue}>.</button>
            <button className='boton-calculadora' value='=' onClick={calculateTotal}>=</button>
            <button className='boton-calculadora' value='+' onClick={handleValue}>+</button>
        </div>
            <button className='boton-clean' onClick={limpiar}>Limpiar</button>
      </section>
    )
}