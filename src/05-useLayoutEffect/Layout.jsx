import { useFetch, useCounter} from "../hooks/"
import { LoadingQuote } from "../03-example/LoadingQuote";
import { Quote } from "../03-example/Quote";

export const Layout = () => {
  
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  
    const { author , quote } = !!data && data[0]


    return (
        <>
            <h4> Breaking Bad Quotes</h4>
            <hr />

            {
                ( isLoading) ?
                <LoadingQuote></LoadingQuote> : <Quote author={author} quote={quote}></Quote>
            }
            <button
            className="btn btn-primary" onClick={()=> increment()} disabled={isLoading}>
                Next Quote
            </button>

            
        </>
  )
}
