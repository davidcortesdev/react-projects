import { Navigate, Route, Routes } from "react-router-dom"
import { Menu } from "../components/Menu"
import { Libreria } from "../components/Libreria"
import { NavBar } from "../layouts/NavBar"


export const AppRouter = () => {

  return (
    <>
    <NavBar />

    <Routes>
        <Route path="menu" element={ <Menu />} />
        <Route path="libreria" element={ <Libreria />} />

        <Route path="/" element={ <Navigate to="/menu" />} />
    </Routes>
    </>
  )
}
