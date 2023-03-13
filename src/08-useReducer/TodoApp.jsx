import { useReducer } from "react"
import { ToDoList, TodoAdd } from "./";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        description: 'Recolectar piedra del alma',
        done: false
    }, {
        id: new Date().getTime() * 3,
        description: 'Recolectar piedra del alma',
        done: false
    }];

    const handleNewTodo =(event, todo)=> {
        event.preventDefault();
        console.log("new todo", todo);
    }

    const [todos, dispatch] = useReducer( todoReducer, initialState );
    console.log(todos);
    
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
                <TodoAdd handleNewTodo = { handleNewTodo }></TodoAdd>
            </div>
        </div>
            
        </>
        
    )
}
