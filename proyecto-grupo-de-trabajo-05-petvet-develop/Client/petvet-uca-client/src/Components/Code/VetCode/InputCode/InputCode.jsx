import React, { useState } from "react";
import "./InputCode.css"
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";


const InputCode = () => {

    const navigate = useNavigate()
    const [code, setCode] = useState("")

    const errors = {
        "code": !code
    }

     const HasErrors = () => Object.values(errors).some(error => error)

    return (
        <div id="input-code">
            <p>Codigo del cliente</p>
            <input type="password"></input>
            <button 
                className={errors["code"]}
                name="code"
                type="submit"
                value={code}
                onChange={({ target }) => { setCode(target.value) }} 
                id="Add-client-btn" 
                disabled={HasErrors()}
                onClick={()=> navigate("/vetHome/Pets", code)}><Icon icon="material-symbols:arrow-right-alt-rounded" color="#3d5666" width="50" /></button>
        </div>
    )
}

export default InputCode;