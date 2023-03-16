import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  const { hola, user } = useContext(UserContext);

  return (
    <>
        <h3>Home App</h3>
        <hr />

        <small>{ user?.name }</small> 
    </>
  )
}
