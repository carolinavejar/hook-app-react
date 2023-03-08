import { useState } from "react"

export const useCounter = (initialValue = 10)=> {
    const [counter, setfCounter] = useState(initialValue);

    return {
        counter
    }
}