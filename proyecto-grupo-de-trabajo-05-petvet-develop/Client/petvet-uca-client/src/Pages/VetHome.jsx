import axios from "axios";
import React, { useEffect, useState } from "react";
import VetCode from "../Components/Code/VetCode/VetCode";
import VetSidebar from "../Components/Sidebar/VetSideBar/VetSideBar";
import Topbar from "../Components/Topbar/Topbar";

function VetHome () {

    const [clients, setClients] = useState([]);

    useEffect(()=>{
        fetchClients()
    }, [])

    const fetchClients = async () => {
        try {
            const { data } = await axios.get("https://api-petvet-production.up.railway.app/api/user")
            setClients(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="VetHome">
            <VetSidebar/>
            <Topbar/>
            <VetCode clients={clients}/>
        </div>
    )
}

export default VetHome;