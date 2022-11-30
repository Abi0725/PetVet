import React from "react";
import "./Footer.css"
import PetVetAlt from "../../assets/PetVetAlt.svg"
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <footer>
            <div id="footer-logo">
                <figure>
                    <img src={PetVetAlt} alt="Logo petVet"/>
                </figure>
            </div>
            <div id="footer-info">
                <h4>Contáctanos</h4>
                <p>petvet@info.com.sv</p>
                <p>(503) 2559-9999</p>
                <p>Col Avila 63 Av Sur y Pje Sta Mónica No 17 San Salvador</p>
            </div>
            <div id="footer-Copy">
                <p> Copyright © Pet Vet, 2022  </p>
            </div>
        </footer>
    )
}

export default Footer;