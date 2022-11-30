import React, { useState } from "react";
import './LoginForm.css';
import PetVetLogo from "../../assets/PetVet.svg"
import Login_prueba from "../../assets/Login_prueba.svg"
import { useNavigate } from "react-router";
import { useUserContext } from "../../Contexts/UserContext";

const LoginForm = ( {onLogin = () => {}}) => {

    const navigate = useNavigate()
    const { user } = useUserContext()

    const [identifier, setIdentifier] = useState("")
    const [password, setPassword] = useState("")

    const errors = {
      "identifier": !identifier,
      "password": !password
    }

    const hasErrors = () => Object.values(errors).some(error => error);

    const onSubmitHandler = (e) => {
  
        e.preventDefault();
    
        if (hasErrors()) {
          toast.warn("Wrong fields");
          return;
        }
    
        onLogin(identifier, password);

        if (user) {
          if(user.roles == "user") {
            navigate("/userHome")
          } else {
            navigate("/vetHome")
          }
        }
    
    }


    return (

<section class="h-screen style-font dog_imagen">
  <div class="container px-6 py-1 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6" >
      <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 h-full">
        {/*<img src={Login_prueba}></img>*/}
      </div>

      <div class="md:w-6/12 lg:w-4/12 lg:ml-20">

      <div class="h-55 grid grid-cols-1 gap-3 justify-items-center">
      <h1 class="text-8xl" id="text-welcome">BIENVENIDO A</h1>
      <img id= "img-logo" class="w-2/3 py-0" src={PetVetLogo}></img>
      </div>

        <form onSubmit={onSubmitHandler}>
    
          <div class="mb-3">
            <input
              className={errors["identifier"]}
              name="identifier"
              type="text"
              value={identifier}
              onChange={({ target }) => { setIdentifier(target.value) }}
              class="form-control block w-full px-5 py-3 text-xl font-normal bg-clip-padding border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none shadow-lg"
              placeholder="Correo electronico"
            />
          </div>

  
          <div class="mb-3">
            <input
              className={errors["password"]}
              name="password"
              value={password}
              type="password"
              onChange={({ target }) => { setPassword(target.value) }}
              class="form-control block w-full px-5 py-3 text-xl font-normal bg-clip-padding border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none shadow-lg"
              placeholder="Contraseña"
            />
          </div>

          <div class="flex justify-between items-left mb-3">
          <a
              href="#!"
              class="text-black hover:text-gray-600 duration-200 transition">¿Olvidaste tu contraseña?</a>
       </div>


       <div class="h-35 grid grid-cols-1 gap-3 content-center justify-items-center">
      <div>
      <button
            disabled={hasErrors()}
            id="btn-continue"
            type="submit"
            class="inline-block py-3 px-20 font-bold text-white text-sm leading-snug uppercase rounded shadow-lg hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">Siguiente</button></div>
            
          <div> 
          <button
            type="submit"
            class=" py-3 px-20 flex space-y-0.5 font-bold bg-white text-black text-sm leading-snug uppercase rounded shadow-lg hover:bg-gray-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">
            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="w-6 h-6"/>Continuar con Google
            </button></div>

          <div><a
              href="#!"
              class="text-black hover:text-gray-600 duration-200 transition ease-in-out">¿No tienes cuenta? Regístrate</a></div>
            </div>   
      
          {/**/}
          
        </form>
      </div>
    </div>
  </div>
</section>
        
    )
}

export default LoginForm;