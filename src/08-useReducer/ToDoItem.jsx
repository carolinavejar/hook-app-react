import React from 'react'

export const ToDoItem = ( { id,  description, done, onDeleteTodo } ) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ description }</span>
            <button 
                onClick={ ()=> onDeleteTodo( id) }
                className="btn btn-danger">Borrar</button>
        </li>
    )
}
