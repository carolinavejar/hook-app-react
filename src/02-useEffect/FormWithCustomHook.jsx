import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState

    return (
        <>
            <div>FormWithCustomHook</div>
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
            <div className="mb-3">
                <input 
                type="password" 
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
                />
            </div>

            <button
            onClick={ onResetForm }
            className="btn btn-primary">Borrar</button>
        </>
        
    )
}
