import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        descripition: 'Recolectar piedra del alma',
        done: false
    }, {
        id: new Date().getTime() * 3,
        descripition: 'Recolectar piedra del alma',
        done: false
    }];

    const [state, dispatch] = useReducer( todoReducer, initialState )
    return (
        <>
            <div>TodoApp</div>
            <hr />

            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </>
        
    )
}
