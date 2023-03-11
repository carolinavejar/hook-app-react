import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = ()=>{
        console.log(inputRef);
        inputRef.current.select();
    }
    return (
    <>
        <div>Focus Screen</div>
        
        <hr />
        <input type="text"
        ref={inputRef}
        placeholder="Ingrese su nombre"
        className="form-control" />  

        <button
        className="btn btn-primary mt-2"
        onClick={ onClick }>
        Set Focus
        </button>  
    </>
        
    )
    }
