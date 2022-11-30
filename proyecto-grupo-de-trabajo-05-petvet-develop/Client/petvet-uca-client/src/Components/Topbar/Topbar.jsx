import { Icon } from "@iconify/react";
import React from "react";
import { useUserContext } from "../../Contexts/UserContext";
import "./Topbar.css"

const Topbar = () => {


    return (
        <div id="topbar">
            <div className="user-email">
                <div id="letters-circle">
                    <p>AC</p>
                </div>
                <div className="user-info-bar">
                    <p>Andres Cardona</p>
                    <Icon icon="mdi:logout" color="white"/>                       
                </div>
            </div>
        </div>
    )
}

export default Topbar;