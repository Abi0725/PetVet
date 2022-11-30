import React from "react";
import './RegisterComplete.css';
import cat_success from "../../../assets/cat_success.svg"

const RegisterComplete = () => {
    return (
      
        <div class="success-msg text-center justify-items-center mb-3 image_success bg-white">
        <h1 class="text-6xl text-color mb-3">¡Fantástico!</h1>
        <h2 class="text-3xl text-color mb-3 ">Has completado el registro existosamente. </h2>
        <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 justify-items-center relative">
        <img class="w-1/3" src={cat_success}></img>
      </div>
      <div>
        <button id="btn-continue-register"
                type="submit"
                class=" py-3 px-20  text-white text-sm leading-snug  rounded shadow-lg hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light">Comencemos</button></div>
        </div>
   
    )
}

export default RegisterComplete;