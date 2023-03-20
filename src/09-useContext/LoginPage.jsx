import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
        <h3>Login App <small>{ user?.name }</small> </h3>
        <hr />

        <pre aria-label="pre">
          { JSON.stringify(user, null, 3)}
        </pre>

        <button
        className="btn btn-primary"
        onClick={ ()=> setUser({
            id: 123,
            name: 'carito',
            email: 'caro.vejarc@gmail.com'
        })}>
          Set user
        </button>
    </>
  )
}
