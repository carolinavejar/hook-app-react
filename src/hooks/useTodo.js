import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


export const useTodo = () => {
    const initialState = [];

    const init = ()=>{
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'ADD TODO',
            payload: todo
        }
        dispatch(action)
    }
    const handleDeleteTodo = ( id ) => {
        const action = {
            type: 'DELETE TODO',
            payload: id
        }
        dispatch(action)
    }
    
    const handleToggleTodo = ( id ) => {
        const action = {
            type: 'TOGGLE TODO',
            payload: id
        }
        dispatch(action)
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [ todos ])

    return {
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todos,
        pendingTodosCount: todos.filter(todo => todo.done).length,
        todosCount: todos.length,
    }
}
