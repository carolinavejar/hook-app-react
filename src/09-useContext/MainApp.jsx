import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
  return (
    <UserProvider>
        <h3>Main App</h3>

        <Navbar></Navbar>
        
        <hr />

        <Routes>
            <Route path = "/" element = { <HomePage/> } />
            <Route path = "/login" element = { <LoginPage/> } />
            <Route path = "/about" element = { <AboutPage/> } />

            {/* <Route path = "/*" element = { <LoginPage/> } /> */}
            <Route path = "/*" element = { <Navigate to="about"/> } ></Route>
        </Routes>
    </UserProvider>
  )
}
