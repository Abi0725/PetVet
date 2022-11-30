import React from "react";
import HistoryTable from "./HistoryTable/HistoryTable";
import "./PetHistory.css"
import PetInfo from "./PetInfo/PetInfo";

const PetHistory = ({ pets = [], appointments = [] }) => {

    const mappedPetsInfo = pets.map(pet => {
        return <PetInfo
            key={pet._id}
            name={pet.name}
            specie={pet.specie}
            breed={pet.breed}
            gender={pet.gender}
            color={pet.color}
            age={pet.age}
            birthday={pet.birthday}
        />
    })

    return (
        <div id="pet-history-div">
            <p className="history-title">Expendiente de mascota</p>
            {mappedPetsInfo}
            <HistoryTable appointments={appointments}/>
        </div>
    )
}

export default PetHistory;