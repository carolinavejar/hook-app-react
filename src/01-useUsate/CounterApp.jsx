import { useState } from "react"

export const CounterApp = () => {
    const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3 } = state;
    return (
        <>
            <div>CounterApp</div>
            <hr />
            <h5>Counter 1 {counter1}</h5>
            <h5>Counter 2 {counter2}</h5>
            <h5>Counter 3 {counter3}</h5>
            
            <button className="btn" onClick={()=>{ setCounter(
                {
                    counter1: counter1 + 1, counter2, counter3,
                }
            ) }}>+1</button>
        </>
        
    )
}
