import { NavBar } from "../layouts/NavBar"
import { AppRouter } from "../router/AppRouter"
import { Bienvenida } from "./Bienvenida"

export const Menu = () => {
  return (
    <>
      <AppRouter />
      
      <NavBar />
      <Bienvenida />
    </>
  )
}
