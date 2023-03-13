import { useForm } from "../hooks/useForm";
export const TodoAdd = ({onNewTodo}) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const todo = {
            id: new Date().getTime(),
            description,
            done: false
        }
        onNewTodo(todo);
        onResetForm();
    }

    const { description, onInputChange, onResetForm} = useForm({
        description : ''
    }) 
    return (
        <form onSubmit= { onFormSubmit } >
            <input type="text"
            value = { description }
            name="description"
            placeholder="¿que hay que hacer'"
            className="form-control"
            onChange = { onInputChange } />

            <button type="submit"
            className="btn btn-outline-primary mt-1">
                agregar
            </button>
        </form>
  )
}
