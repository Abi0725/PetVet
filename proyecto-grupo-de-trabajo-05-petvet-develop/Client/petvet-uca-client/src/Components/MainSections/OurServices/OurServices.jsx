import React from "react";
import './OurServices.css'
import MedicalRegisterIcon from "../../../assets/6.svg"
import ComputerIcon from "../../../assets/7.svg"
import CalendarIcon from "../../../assets/8.svg"
import VetIcon from "../../../assets/5.svg"

const OurServices = () => {
    return (
        <section id="our-services">
            <h2> Nuestros Servicios</h2>
            <div id="grid-services">
                <div className="service-card">
                    <h3>Registro médico</h3>
                    <img src={MedicalRegisterIcon}/>
                </div>
                <div className="service-card Computer">
                    <h3>Acceso a tu expediente</h3>
                    <img src={ComputerIcon}/>
                </div>
                <div className="service-card">
                    <h3>Agenda personalizada</h3>
                    <img src={CalendarIcon}/>
                </div>
                <div className="service-card">
                    <h3>Visita varias sucursales</h3>
                    <img src={VetIcon}/>
                </div>
            </div>
        </section>
    )
}

export default OurServices;