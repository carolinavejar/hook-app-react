import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
        <div className='container'>
            <h1>CounterWithCustomHook {counter}</h1>
            <hr />

            <button className="btn btn-primary" onClick={ ()=>increment(3) }>+1</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ ()=>decrement(3) }>-1</button>

        </div>
            
        </>
    )
}
