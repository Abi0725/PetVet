import { useEffect } from "react"
import { useNavigate } from "react-router"
import RegisterForm from "../Components/RegisterForm/RegisterForm"
import { useUserContext } from "../Contexts/UserContext"

function Register () {

    const navigate = useNavigate()
    const { register, user} = useUserContext()

    const onRegisterHandler = async (username, email, password) => {
        await  register(username, email, password)
    }

    useEffect(() => {
        if (user) {
            navigate('/userHome')
        }
    }, [user])

    return (
        <div className="Register">
            <RegisterForm onRegister={onRegisterHandler}/>
        </div>
    )
}

export default Register;