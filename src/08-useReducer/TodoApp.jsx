import { useEffect, useReducer } from "react"
import { ToDoList, TodoAdd } from "./";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {

    const initialState = [];

    const init = ()=>{
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );
    
    const handleNewTodo =( todo )=> {
        const action = {
            type: 'ADD TODO',
            payload: todo
        }
        // fn que va a usar para enviar la accion
        dispatch(action)
    }

    

    useEffect(() => {
        console.log("guarda todos");
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [ todos ])
    
    return (
        <>
        <div className="row">
            <div className="col-7">
                <h5>todo app: 10 <small>pendientes: 2</small></h5>
                <hr />

                {/* Todo list */}
                <ToDoList todos={ todos }></ToDoList>
                {/* Todo list */}

            </div>

            <div className="col-5">
                <h5>agregar todo</h5>
                <hr />
                <TodoAdd onNewTodo = { handleNewTodo }></TodoAdd>
            </div>
        </div>
            
        </>
        
    )
}
