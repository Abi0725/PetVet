import React from "react";
import "./BestFriend-sec.css";
import CatdAndDog from "../../../assets/CatandDog.svg";

const BestFriendsec = () => {
    return (
        <section>
            <div id="Text-bf-div">
                <h1>EL <strong>MEJOR</strong> AMIGO DE TU MASCOTA</h1>
                <hr></hr>
                <p>Excelentes mascotas merecen un excelente cuidado. Siempre estamos completamente enfocados en ayudar a su mascota y a usted a superar cualquier obstáculo. Salud para los que amas.</p>
            </div>
            <div id="img-bf-div">
                <figure>
                    <img src={CatdAndDog} alt="Cat and Dog img" id="img-Cat-Dog"/>
                </figure>
            </div>
        </section>
    )
}

export default BestFriendsec;