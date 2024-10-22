import { useCounter } from "./hooks/useCounter"

export const CounterWithCoustomHook = () => {

    const { counter, onDecrement, onIncrement, onReset } = useCounter()

  return (
    <>
        <h1>Counter With Hook: { counter } </h1>
        <hr />
        <button onClick={() => onIncrement(3)} className="btn btn-primary">+1</button>
        <button onClick={onReset} className="btn btn-primary">Reset</button>
        <button onClick={() => onDecrement(3)} className="btn btn-primary">-1</button>
    </>

  )
}
