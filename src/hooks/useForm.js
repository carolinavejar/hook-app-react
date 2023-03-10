import { useState } from "react"

export const useForm = (inictialForm = { }) => {
  
    const [formState, setFormState] = useState(inictialForm);

    const onInputChange =({ target })=> {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ] : value
        })
    };

    const onResetForm = ()=> {
        console.log("onResetForm");
        setFormState(
            inictialForm
        )
    }

  
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
