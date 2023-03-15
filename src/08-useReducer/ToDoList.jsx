import { ToDoItem } from "./ToDoItem"

export const ToDoList = ( { todos, onDeleteTodo } ) => {



    return (
        <ul className="list-group ">
        {
            todos.map(({ id, description, done })=> (
                <ToDoItem key = { id }                     
                    id = { id } 
                    description = { description }
                    done = { done }
                    onDeleteTodo = { onDeleteTodo } >
                </ToDoItem>
            ))
        }
        </ul>
    )
}
