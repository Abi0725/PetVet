import React from "react";
import AddClient from "../Components/AddClient/AddClient";
import VetSidebar from "../Components/Sidebar/VetSideBar/VetSideBar";
import Topbar from "../Components/Topbar/Topbar";

function VetAddClient () {
    return (
        <div className="vet-add-client">
            <VetSidebar/>
            <Topbar/>
            <AddClient/>
        </div>
    )
}

export default VetAddClient;