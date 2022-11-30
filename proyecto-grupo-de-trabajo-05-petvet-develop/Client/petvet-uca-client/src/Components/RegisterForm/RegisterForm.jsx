import React, { useState } from "react";
import './RegisterForm.css';
import beauty_catdog from "../../assets/beauty_catdog.svg"
import { useNavigate } from "react-router";
import { useUserContext } from "../../Contexts/UserContext";

const RegisterForm = ( { onRegister = () => {}}) => {

    const {user} = useUserContext()
    const navigate = useNavigate()

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()


    const errors = {
      "identifier": !userName || userName.lenght < 4 || userName.lenght > 32,
      "email": !email,
      "password": !password,
      "re-password": !rePassword || password != rePassword
    }

    const hasErrors = () => Object.values(errors).some(error => error)

    const onSubmitHandler = (e) => {
      e.preventDefault()

      if (hasErrors()) {
        toast.warn("Wrong fields!");
        return;
      }

      onRegister(userName, email, password);


    }

    return (
        <section class="h-screen font-cuprum cat_image">
  <div class="container px-6 py-12 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6" >
      <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 ">
        {/*<img src={cat_register}></img>*/}
      </div>

      <div class="md:w-6/12 lg:w-4/12 lg:ml-20">

      <div class="h-55 grid grid-cols-1 gap-3 justify-items-center">
      <h1 class="text-6xl" id="text-register">Registro</h1>
      </div>

      <form class="mt-8" x-data="{password: '',password_confirm: ''} py-10" onSubmit={onSubmitHandler}>
                        <div class="mx-auto max-w-lg ">
                    <div class="py-2">
                        <input
                        className={errors["identifier"]}
                        name="identifier"
                        type="text"
                        value={userName}
                        onChange={({ target }) => { setUserName(target.value) }} 
                        class="form-control block w-full px-3 py-3 text-md font-normal bg-clip-padding border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none shadow-lg"
                        placeholder="userName"/>
                    </div>
                    <div class="py-2">
                        <input
                        className={errors["email"]}
                        name="email"
                        type="email"
                        value={email}
                        onChange={({ target }) => { setEmail(target.value) }} 
                        class="form-control block w-full px-3 py-3 text-md font-normal bg-clip-padding border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none shadow-lg"
                        placeholder="Correo electronico"/>
                    </div>
                    <div class="py-2">
                        <input
                        className={errors["password"]}
                        name="password"
                        type="password"
                        value={password}
                        onChange={({ target }) => { setPassword(target.value) }} 
                        class="form-control block w-full px-3 py-3 text-md font-normal bg-clip-padding border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none shadow-lg"
                        placeholder="Contraseña"/>
                    </div>
                    <div class="py-2">
                        <input
                        className={errors["re-password"]}
                        name="re-password"
                        type="password"
                        value={rePassword}
                        onChange={({ target }) => { setRePassword(target.value) }} 
                        class="form-control block w-full px-3 py-3 text-md font-normal bg-clip-padding border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none shadow-lg"
                        placeholder="Confirmar contraseña"/>
                    </div>
                      
                    <div class="h-35 grid grid-cols-1 gap-3 content-center justify-items-center py-8">
                     <div>
                        <button id="btn-continue-register"
                                type="submit"
                                disabled={hasErrors()}
                                class="inline-block py-3 px-20 font-bold text-white text-sm leading-snug uppercase rounded shadow-lg hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"  
                                data-mdb-ripple-color="light">Siguiente</button></div>
                        <div> 
                        <button type="submit"
                                class=" py-3 px-20 flex space-y-0.5 font-bold bg-white text-black text-sm leading-snug uppercase rounded shadow-lg hover:bg-gray-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                onClick={() => navigate("/")}>Cancelar
                        </button></div>

                    <div class="justify-items-center"><img src={beauty_catdog} class="w-1/3"/></div>
                </div> 
            </div>
        </form>
      </div>
    </div>
  </div>
</section>
    )
}

export default RegisterForm;