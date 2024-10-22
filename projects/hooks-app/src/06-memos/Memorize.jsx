import { useState } from "react"
import { useCounter } from "../01-useState/hooks/useCounter"
import { Small } from "./Small"


export const Memorize = () => {

    const {counter, onIncrement} = useCounter(10)
    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter: <Small value={counter}/></h1>
        <hr />

        <button
            className="btn btn-primary"
            onClick={() => onIncrement()}>
        +1
        </button>

        <button 
            className="btn btn-primary"
            onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
