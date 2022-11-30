import React from "react";
import AddPet from "../Components/AddPet/AddPet";
import VetSidebar from "../Components/Sidebar/VetSideBar/VetSideBar";
import Topbar from "../Components/Topbar/Topbar";

function VetRecord () {
    return (
        <div className="vet-record">
            <VetSidebar/>
            <Topbar/>
            <AddPet/>
        </div>
    )
}

export default VetRecord