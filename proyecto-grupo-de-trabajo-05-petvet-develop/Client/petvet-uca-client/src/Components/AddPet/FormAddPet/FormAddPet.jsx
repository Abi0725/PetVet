import React, { useState } from "react";
import "./FormAddPet.css"

const FormAddPet = ({ onAddPet = () => {}}) => {

    const [petNameField, setPetName] = useState("")
    const [specieField, setSpecie] = useState("")
    const [breedField, setBreed] = useState("")
    const [colorField, setColor] = useState("")
    const [genderField, setGender] = useState("")
    const [ageField, setAge] = useState("")
    const [birthdatField, setBirthday] = useState("")

     const errors = {
        "name": !petNameField,
        "specie": !specieField,
        "breed": !breedField,
        "color": !colorField,
        "gender": !genderField,
        "age": !ageField,
        "birthday": !birthdatField
    }

    const hasErrors = () => {
        return Object.values(errors).some(error => error);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (hasErrors()) {
            toast.warn("Your fields are wrong!")
            return;
        }

        onAddPet(petNameField, specieField, breedField, colorField, genderField, ageField, birthdatField)
        
        setPetName("")
        setSpecie("")
        setBreed("")
        setColor("")
        setGender("")
        setAge("")
        setBirthday("")
    }
    


    return (
        <form onSubmit={onSubmitHandler}>
            <ul>
                <li>
                    <label for="fpetname">Nombre del paciente</label>
                    <input 
                        className={errors["name"]}
                        name="name"
                        type="text"
                        value={petNameField}
                        onChange={(e)=> { setPetName(e.target.value)}}  
                        id="fpetname">                            
                    </input>
                </li>
                <li>
                    <label for="fspecies"> Especie </label>
                    <select 
                        className={errors["specie"]}
                        name="specie" 
                        value={specieField}
                        onSelect={(e)=> { setSpecie(e.target.value)}} 
                        id="fspecies">
                        <option value="Gato">Gato</option>
                        <option value="Perro">Perro</option>
                        <option value="Ave">Ave</option>
                        <option value="Conejo">Conejo</option>
                    </select>
                </li>
                <li>
                    <label for="fbreed">Raza</label>
                    <input 
                        className={errors["breed"]}
                        name="breed"
                        value={breedField}
                        type="text" 
                        onChange={(e)=> { setBreed(e.target.value)}} 
                        id="fbreed">                            
                    </input>
                </li>
                <li>
                    <label for="fpetcolor">Color</label>
                    <input
                        className={errors["color"]}
                        name="color" 
                        type="text" 
                        value={colorField}
                        onChange={(e)=> { setColor(e.target.value)}} 
                        id="fpetcolor">                            
                    </input>
                </li>
                <li>
                    <label for="fgender">Sexo</label>
                    <select
                        className={errors["gender"]} 
                        name="gender" 
                        value={genderField}
                        onSelect={(e)=> { setGender(e.target.value)}} 
                        id="fgender"> 
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </li>
                <li>
                    <label for="fage">Edad</label>
                    <input
                        className={errors["age"]}
                        name="age"
                        type="number"
                        value={ageField}
                        onChange={(e)=> { setAge(e.target.value)}}  
                        id="fage">                            
                    </input>
                </li>
                <li>
                    <label for="fbirthday">Fecha de nacimiento</label>
                    <input
                        className={errors["birthday"]}
                        name="date" 
                        type="date" 
                        value={birthdatField}
                        onChange={(e)=> { setBirthday(e.target.value)}} 
                        id="fbirthday">                            
                    </input>
                </li>
            </ul>
            <button type="submit" disabled={hasErrors()}>Agregar</button>
        </form>
    )
}

export default FormAddPet;