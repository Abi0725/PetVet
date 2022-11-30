import React from "react";

import CodeClient from "../Components/Code/CodeClient/CodeClient";
import ClientSidebar from "../Components/Sidebar/ClientSideBar/ClientSidebar";
import Topbar from "../Components/Topbar/Topbar";
import { useUserContext } from "../Contexts/UserContext";

function UserHome () {

    const { user } = useUserContext()
    
    return (
        <div className="user-home">
            <ClientSidebar/>
            <Topbar/>
            <CodeClient code={user.code}/>

        </div>
    )
}

export default UserHome;