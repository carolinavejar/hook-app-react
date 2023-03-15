import { ToDoList, TodoAdd } from "./";
import { useTodo } from '../hooks'

export const TodoApp = () => {
    // useTodo
    const { todos, pendingTodosCount, todosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();
    
    return (
        <>
        <div className="row">
            <div className="col-7">
                <h5>todo app:  { todosCount } <small> Pendientes{ pendingTodosCount } </small></h5>
                <hr />

                {/* Todo list */}
                <ToDoList 
                    onDeleteTodo = { handleDeleteTodo }
                    todos = { todos }
                    onToggleTodo = { handleToggleTodo }
                >
                    </ToDoList>
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
