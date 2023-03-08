import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log("message mounted");
    
      return () => {
        console.log("message unmounted");
      }
    }, [])
    

  return (
    <>
        <span>Usuario ya existe</span>
    </>
  )
}
