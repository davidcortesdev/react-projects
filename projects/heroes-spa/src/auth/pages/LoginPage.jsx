import { useContext } from "react"
import { AuthContext } from "../context"
import { useNavigate } from "react-router"


export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate()

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('David Cortés') 
    navigate(lastPath, { replace: true })
  }

  return (
    <>
        <div className="container mt-5">
          <h1>Login</h1>
          <hr />

          <button 
            className="btn btn-primary"
            onClick={onLogin}>
            Login
          </button>
          
        </div>
    </>
  )
}
