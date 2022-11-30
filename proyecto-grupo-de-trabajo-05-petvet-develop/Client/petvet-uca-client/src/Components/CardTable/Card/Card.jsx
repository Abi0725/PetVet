import React from "react";
import "./Card.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";

const Card = ({ name = '', age = '', breed = '', image = ''}) => {

    const navigate = useNavigate()

    return (
        <div className="card">
            <div className="blue-div"></div>
            <figure>
                <img alt="profile-img" src={image}/>
            </figure>
            <div className="info-card">
                <h4>{name}</h4>
                <p>{age}</p>
                <p>{breed}</p>   
            </div>          
            <button id="next-arrow-pet" onClick={() => navigate("/userHome/Pets/History")}><Icon icon="material-symbols:arrow-right-alt-rounded" color="white" /></button>  
        </div>
    )
}

export default Card;