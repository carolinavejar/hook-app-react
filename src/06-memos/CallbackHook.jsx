import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // useCallback -> Sirve para memorizar funciones
    const incrementFather = useCallback(
      () => {
        // setCounter(counter +1)
        setCounter((value) => value + 1 )
      },
      [],
    )
    

    // si incrementFather no tuviera memo
    // esta fn siempre seria diferente
    // y se lalamaría en un ciclo infinito
    // useEffect(() => {
        // incrementFather();
    // }, [incrementFather])
    

    // const incrementFather = ()=> {
    //     setCounter(counter +1)
    // }

    return (
        <>
            <div>CallbackHook : { counter }</div>
            <hr />

            <ShowIncrement increment={ incrementFather }></ShowIncrement>
        </>
    )
}
