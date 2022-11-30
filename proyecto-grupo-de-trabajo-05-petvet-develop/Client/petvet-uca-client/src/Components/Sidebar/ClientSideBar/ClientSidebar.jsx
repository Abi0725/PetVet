import React from "react";
import './ClientSidebar.css';
import LogoAlt from "../../../assets/PetVetAlt.svg"
import { useNavigate } from "react-router";

const ClientSidebar = () => {

    const navigate = useNavigate()

    return (
        <div id="Sidebar-menu">
            <div>
                <figure>
                    <img src={LogoAlt}/>
                </figure>
            </div>
            <div id="menu-options">
                <ul>
                    <li onClick={ ()=> navigate("/userHome/Pets") }>Mascotas</li>
                    <li>Calendario</li>
                </ul>
            </div>
        </div>
    )
}

export default ClientSidebar;