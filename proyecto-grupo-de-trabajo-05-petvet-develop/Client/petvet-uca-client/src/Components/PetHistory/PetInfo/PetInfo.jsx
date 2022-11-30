import React from "react";
import "./PetInfo.css"

const PetInfo = ({ name = '', specie = '', breed = '', gender = '', color = '', age = '', birthday = '' }) => {
    return (
        <div id="pet-info">
            <div>
                <p>Nombre del paciente</p> <p>{name}</p>
            </div>
            <div>
                <p>Especie</p> <p>{specie}</p>
            </div>
            <div>
                <p>Raza</p> <p>{breed}</p>
            </div>
            <div>
                <p>Sexo</p> <p>{gender}</p>
            </div>
            <div>                
                <p>Color</p> <p>{color}</p>
            </div>
            <div>                
                <p>Edad</p> <p>{age}</p>
            </div>
            <div>                
                <p>Fecha de Nacimiento</p> <p>{birthday}</p>
            </div>
        </div>
    )
}

export default PetInfo;
