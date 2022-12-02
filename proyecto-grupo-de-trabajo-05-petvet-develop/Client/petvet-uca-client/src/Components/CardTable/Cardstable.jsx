import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../Contexts/UserContext";
import Card from "./Card/Card";
import "./CardsTable.css";

const CardsTable = ( {pets = []}) => {
    const { user } = useUserContext()
    const navigate = useNavigate();

    const validate = () => {
        if( user.roles == "user") {
            return false
        } else {
            return true
        }
    }

    const _validate = validate()

   

    const mappedPetsCards = pets.map(pet => {
        return (
            <Card
                key={pet["_id"]}
                name={pet["_name"]}
                age={pet["_age"]}
                breed={pet["_breed"]}
            />
        )
    })

    return (
        <div id="cards-table">
            {mappedPetsCards}
            {
                validate == true ? 
                <>
                         <button onClick={() => navigate("/vetHome/Pets/Add")}>Agregar</button>
                </> : 
                <>
                    
                </>
            }
        </div>
    )
}

export default CardsTable;