import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../Contexts/UserContext";
import Card from "./Card/Card";
import "./CardsTable.css";

const CardsTable = ( {pets = []}) => {
    const { user } = useUserContext()
    const navigate = useNavigate();
    const [_pets, set_pets] = useState([])



    const validate = () => {
        if( user.roles == "user") {
            return false
        } else {
            return true
        }
    }

    const _validate = validate()

   const fetchData = async (i = "") => {
        try {
            const { data } = await axios.get("https://api-petvet-production.up.railway.app/pet/", { params: pets[i]["_id"]})
            set_pets(data)
        } catch (error) {
            console.log(error);
        }
   }


   useEffect(() => {
    for (const i=0; pets.length; i++) {
        fetchData(i)
       }

    }, [])

   

    const mappedPetsCards = _pets.map(pet => {
        return (
            <Card
                key={pet._id}
                name={pet.name}
                age={pet.age}
                breed={pet.breed}
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