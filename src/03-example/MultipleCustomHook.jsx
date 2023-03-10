import { useFetch } from "../hooks/useFetch"

export const MultipleCUstonHook = () => {
  
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/2')
  
    console.log({ data, isLoading, hasError });


    return (
        <>
            <h4> Breaking Bad Quotes</h4>
        </>
  )
}
