import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)

    const onDecrement = ( value = 1) => {
        if(counter - value <= 0) return
        setCounter(counter - value)
    }

    const onIncrement = ( value = 1 ) => {
        setCounter(counter + value)
    }

    const onReset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        onDecrement,
        onIncrement,
        onReset,
    }
}