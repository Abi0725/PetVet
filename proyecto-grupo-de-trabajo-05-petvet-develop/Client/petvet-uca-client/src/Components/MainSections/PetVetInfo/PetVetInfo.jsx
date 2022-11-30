import React from "react";
import "./PetVetInfo.css"
import SleepDog from '../../../assets/SleepDog.svg'

const PetVetInfo = () => {
    return (
        <section id="sec-petvet-info">
            <div>
                <figure>
                    <img src={SleepDog}/>
                </figure>
            </div>
            <div id="card-info">
                <h2>¿Qué es PetVet?</h2>
                <p>PetVet es el software que se preocupa por el bienestar y salud de tus mascotas. Surge por la necesidad de tener un cuidado exclusivo para ellos y velar por su salud y bienestar. La necesidad de llevar un control personalizado, y debido a que muchas veces los dueños tienen múltiples responsabilidades necesitan de un apoyo tecnológico para poder cuidar de sus mascotas.</p>
                <button>Contáctanos</button>
            </div>
        </section>
    )
}

export default PetVetInfo;