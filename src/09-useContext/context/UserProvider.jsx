import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider values={{ hola: "mundo"}}>
        { children }
    </UserContext.Provider>
  )
}
