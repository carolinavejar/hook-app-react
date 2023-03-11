import { useFetch } from "../hooks/useFetch"

export const MultipleCUstonHook = () => {
  
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/2')
  
    console.log({ data, isLoading, hasError });

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
                (
                    <div className="alert alert-info text-center">
                        Loading
                    </div>
                ) : 
                (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{author}</p>
                        <footer className="blockquote-footer">{quote}</footer>

                    </blockquote>
                )
            }
             <button className="btn btn-primary">Next Quote</button>

            
        </>
  )
}
