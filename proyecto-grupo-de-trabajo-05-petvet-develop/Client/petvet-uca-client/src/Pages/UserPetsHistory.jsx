import axios from "axios";
import React, { useEffect, useState } from "react";
import PetHistory from "../Components/PetHistory/PetHistory";
import ClientSidebar from "../Components/Sidebar/ClientSideBar/ClientSidebar";
import Topbar from "../Components/Topbar/Topbar";

function UserPetsHistory () {
    const [pets, setPets] = useState([]);
    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
        fetchAppointments();
        fetchPets();
    }, [])

    const fetchAppointments = async () => {
        try{
            const { data } = await axios.get("/appointments")
            setAppointments(data.appointments);
        }catch (error) {
            toast.error("Error inesperado");
        }
    }

    const fetchPets = async () => {
        try {
            const { data } = await axios.get("/pets");
            setPets(data.pets);
        }catch (error) {
            toast.error("Error inesperado");
        }
    }

    return (
        <div className="user-pets-history">
            <ClientSidebar/>
            <Topbar/>
            <PetHistory appointments={appointments} pets={pets}/>
        </div>
    )
}

export default UserPetsHistory;
