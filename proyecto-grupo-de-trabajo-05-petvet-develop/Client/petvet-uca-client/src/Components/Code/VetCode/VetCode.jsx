import React from "react";
import { useNavigate } from "react-router";
import ClientTable from "./ClientTable/ClientTable";
import InputCode from "./InputCode/InputCode";
import "./VetCode.css"

const VetCode = ({ clients = [] }) => {

    const navigate = useNavigate();

    return (
        <div className="vet-code">
            <InputCode/>
            <ClientTable clients={clients}/>
            <button className="add-btn" onClick={() => navigate("/vetHome/AddClient")}>Agregar</button>
        </div>
    )  
}

export default VetCode;