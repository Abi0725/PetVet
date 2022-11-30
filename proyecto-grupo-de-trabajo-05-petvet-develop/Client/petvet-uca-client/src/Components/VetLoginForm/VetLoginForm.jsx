import React from "react";
import './VetLoginForm.css';
import PetVetLogo from "../../assets/PetVet.svg"

const VetLoginForm = () => {
    return (

<section class="h-screen font-cuprum vet_imagen">
  <div class="container px-6 py-1 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6" >
      <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 h-full">
      </div>

      <div class="md:w-6/12 lg:w-4/12 lg:ml-20">

      <div class="h-55 grid grid-cols-1 gap-3 justify-items-center">
      <h1 class="text-8xl" id="text-welcome">BIENVENIDO A</h1>
      <img id= "img-logo" class="w-2/3 py-0" src={PetVetLogo}></img>
      </div>

        <form>
    
          <div class="mb-3">
            <input
              type="text"
              class="form-control block w-full px-5 py-3 text-xl font-normal bg-clip-padding border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none shadow-lg"
              placeholder="Correo electronico"
            />
          </div>

          <div class="mb-3">
            <input
              type="password"
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
      
            id="btn-continue"
            type="submit"
            class="inline-block py-3 px-20 font-bold text-white text-sm leading-snug uppercase rounded shadow-lg hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">Siguiente</button></div>
            

            </div>   
      
          {/**/}
          
        </form>
      </div>
    </div>
  </div>
</section>
        
    )
}

export default VetLoginForm;