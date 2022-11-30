import React, { useState } from "react";
import "./FormAddClient.css";

const FormAddClient = ({ onAddClient = () => {}}) => {

    const [nameField, setName] = useState("")
    const [addressField, setAddress] = useState("")
    const [phoneField, setPhone] = useState("")

    const errors = {
        "name": !nameField,
        "address": !addressField,
        "phone": !phoneField
    }

    const hasErrors = () => {
        return Object.values(errors).some(error => error);
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        if (hasErrors()) {
          toast.warn("Your fields are wrong!")
          return;
        }

        onAddClient(nameField, addressField, phoneField)

        setAddress("")
        setName("")
        setPhone("")
    }   
    
    return (
        <form id="add-client-form" onSubmit={onSubmitHandler}>
            <ul>
                <li>
                    <label for="fname">Nombre del cliente</label>
                    <input 
                        className={errors["name"]}
                        name="name"
                        type="text"
                        value={nameField}
                        onChange={(e)=> { setName(e.target.value)}} 
                        id="fname">                            
                        </input>
                </li>
                <li>
                    <label for="faddress">Dirección</label>
                    <input 
                        className={errors["address"]}
                        name="address"
                        type="text" 
                        value={addressField}
                        onChange={(e)=> { setAddress(e.target.value)}} 
                        id="faddress"></input>
                </li>
                <li>
                    <label for="fphone">Teléfono</label>
                    <input 
                        className={errors["phone"]}
                        name="phone"
                        type="tel"
                        value={phoneField}
                        onChange={(e)=> { setPhone(e.target.value)}}  
                        id="fphone"></input>
                </li>
                <button type="submit" id="add-client-btn" disabled={hasErrors()}>Agregar</button>
            </ul>
        </form>
    )
}

export default FormAddClient;