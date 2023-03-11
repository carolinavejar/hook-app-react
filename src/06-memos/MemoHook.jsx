import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Ahi vamos !!!");
    }

    return `${ iterationNumber } iteraciones realizadas`
}

export const MemooHook = () => {

    const { counter, increment } = useCounter(20);
    const [show, setShow] = useState(true);

    // useMemo -> meoriza un valor 
    const msgMemorizeValue = useMemo(()=> heavyStuff(counter), [ counter ])
    return (
        <>
            <div>Counter { counter }</div>
            <hr />

            <h4> { msgMemorizeValue } </h4>
            {/* <h4> { heavyStuff(100) } </h4> */}
            
            <button
                className="btn btn-primary"
                onClick={ ()=> increment() }
            >+1</button>

            <button
                className="btn btn-primary"
                onClick={ ()=> setShow( !show ) }
            >Show/Hide {JSON.stringify(show)}</button>

        </>
        
    )
}
