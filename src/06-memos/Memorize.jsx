import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter();
    const [boolean, setBoolean] = useState(true);

    const handleClick = () => {
        setBoolean(!boolean);
    }

  return (
    <>
        <h1>Memorize</h1>
        <hr/>
        <h3>Counter: <Small value={counter}/></h3>
        <button onClick={()=>increment()} className="btn btn-primary">+1</button>
        <button onClick={handleClick}>True/False: {JSON.stringify(boolean)}</button>
    </>
  )
}
