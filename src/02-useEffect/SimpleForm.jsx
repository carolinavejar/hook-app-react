import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'caritop2',
        email: 'caro@google.cl'
    });

    const { username, email } = formState;

    const onInputChange =({ target })=> {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ] : value
        })
    };

    // dispara efectos secundarios
    useEffect(() => {
    }, [])
    
    // colocar arreglo vacio en useEffect, 
    // para que solo sea ejecutado cuando el  
    // componente es montado la primera vez (renderizado) 

    useEffect(() => {
    }, [formState]);

    useEffect(() => {
    }, [email]);
    // colocar arreglo especificando que cambia en useEffect, 
    // solo será llamado cuando eso cambia

    

    return (
        <>
            <div>SimpleForm</div>
            <hr></hr>
            <div className="mb-3">
                <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <input 
                type="email" 
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
                />
            </div>

            {
                (username === "caritop2") && <Message></Message>
            }
        </>
        
    )
}
