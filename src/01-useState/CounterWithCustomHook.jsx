import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const {counter, increment, reset, decrement} = useCounter();
  return (
    <>
    <h1>Counter With Custom Hook</h1>
    <hr/>
    <h5>Counter: {counter}</h5>
    <button className='btn btn-primary' onClick={()=>increment(2)}> +1</button>
    <button className='btn btn-primary' onClick={reset}>Reset</button>
    <button className='btn btn-primary' onClick={()=>decrement(2)}>-1</button>
    </>
  )
}
