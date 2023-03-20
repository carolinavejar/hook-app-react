import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  const { hola, user } = useContext(UserContext);

  return (
    <>
        <h3>Home App</h3><small>{ user?.name }</small>
        <hr />

        <pre aria-label="pre">{ JSON.stringify(user) }</pre> 
    </>
  )
}
