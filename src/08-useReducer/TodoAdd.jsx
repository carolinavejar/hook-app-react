import { useState } from "react";

export const TodoAdd = ({handleNewTodo}) => {

    const [inputValue, setInputValue] = useState("");
    const onInputChanged = ( {target} ) => {
        setInputValue(target.value);
    }

    return (
        <form action="">
            <input type="text"
            value = { inputValue }
            placeholder="¿que hay que hacer'"
            className="form-control"
            onChange = { onInputChanged } />

            <button type="submit"
            className="btn btn-outline-primary mt-1"
            onClick={ (event) => 
                {
                    const todo = {
                        id: new Date().getTime(),
                        description: inputValue.trim(),
                        done: false
                    }
                    handleNewTodo(event, todo)
                }
            }>
                agregar
            </button>
        </form>
  )
}
