import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = (initialValue = 10) => {
  for(let i=0; i<initialValue; i++){
    console.log('...');
  }
  return `${initialValue} veces corrido`;
}



export const MemoHook = () => {

    const {counter, increment} = useCounter(1000);
    const [boolean, setBoolean] = useState(true);

    const handleClick = () => {
        setBoolean(!boolean);
    }

    const memorized = useMemo(()=>{heavyStuff(counter)},[counter]);

  return (
    <>
        <h1>Memorize</h1>
        <hr/>
        <h3>Counter: <small>{counter}</small></h3>
        <h4>{memorized}</h4>
        <button onClick={()=>increment()} className="btn btn-primary">+1</button>
        <button onClick={handleClick}>True/False: {JSON.stringify(boolean)}</button>
    </>
  )
}
