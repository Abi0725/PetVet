import { useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../Components/LoginForm/LoginForm"
import { useUserContext } from "../Contexts/UserContext";


function Login () {
    const navigate = useNavigate()
    const { login, user } = useUserContext()
  
    const onLoginHandler = async (identifier, password) => {
      await login(identifier, password);
    }

    useEffect(() => {
        if (user) {
          if(user.roles == "user") {
            navigate("/userHome")
          } else {
            navigate("/vetHome")
          }
        }
      }, [user])

    return (
        <div className="Login">
            <LoginForm onLogin={onLoginHandler}/>
        </div>
    )
}   

export default Login