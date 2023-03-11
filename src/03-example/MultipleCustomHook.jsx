import { useFetch, useCounter} from "../hooks/"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCUstonHook = () => {
  
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  
    // console.log({ data, isLoading, hasError });

    const { author , quote } = !!data && data[0]
    // es como una condicional ,
    // si la primera condicion ejecuta la siguiente

    // undefined    -> undefined
    // !undefined   -> true
    // !!!undefined -> false

    return (
        <>
            <h4> Breaking Bad Quotes</h4>
            <hr />

            {
                ( isLoading) ?
                <LoadingQuote></LoadingQuote> : <Quote props={author} quote={quote}></Quote>
            }
             <button
            className="btn btn-primary" onClick={()=> increment()} disabled={isLoading}>
                Next Quote
            </button>

            
        </>
  )
}
