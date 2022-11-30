import React from "react";
import './VetSideBar.css';
import LogoAlt from "../../../assets/PetVetAlt.svg"
import { useNavigate } from "react-router";

const VetSidebar = () => {

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
                    <li onClick={()=> navigate("/vetHome")}>Clientes</li>
                    <li>Calendario</li>
                </ul>
            </div>
        </div>
    )
}

export default VetSidebar;