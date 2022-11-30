import React from "react";
import VetSidebar from "../Components/Sidebar/VetSideBar/VetSideBar";
import Topbar from "../Components/Topbar/Topbar";
import CardsTable from "../Components/CardTable/Cardstable";

function VetPets () {
    return (
        <div className="vet-pets">
            <VetSidebar/>
            <Topbar/>
            <CardsTable/>
            
        </div>
    )
}

export default VetPets;