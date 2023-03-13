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

    const [todos, dispatch] = useReducer( todoReducer, initialState );
    console.log(todos);
    
    return (
        <>
        <div className="row">
            <div className="col-7">
                <h5>todo app: 10 <small>pendientes: 2</small></h5>
                <hr />

                <ul className="list-group ">
                    {
                        todos.map(todo=> (
                            <li key= { todo.id } className="list-group-item d-flex justify-content-between">
                                <span className="align-self-center">item 1</span>
                                <button className="btn btn-danger">Borrar</button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="col-5">
                <h5>agregar todo</h5>
                <hr />
                <form action="">
                    <input type="text"
                    placeholder="¿que hay que hacer'"
                    className="form-control" />

                    <button type="submit"
                    className="btn btn-outline-primary mt-1">
                        agregar
                    </button>
                </form>
            </div>
        </div>
            
        </>
        
    )
}
