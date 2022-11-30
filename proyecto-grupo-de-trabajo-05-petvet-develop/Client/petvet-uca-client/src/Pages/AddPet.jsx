import React from "react";
import VetSidebar from "../Components/Sidebar/VetSideBar/VetSideBar";
import Topbar from "../Components/Topbar/Topbar";

function AddPet () {
    return (
        <div className="Add-pet">
            <VetSidebar/>
            <Topbar/>
            <AddPet/>
        </div>
    )
}

export default AddPet