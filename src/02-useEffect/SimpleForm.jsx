import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'caritop',
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
        console.log("se llamo use effect");
    })
    

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

        </>
        
    )
}
