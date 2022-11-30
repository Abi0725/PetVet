import React from "react";

import Header from '../Components/Header/Header'
import PetVetInfo from '../Components/MainSections/PetVetInfo/PetVetInfo'
import OurServices from '../Components/MainSections/OurServices/OurServices'
import BestFriendsec from '../Components/MainSections/BestFriend-Sec/BestFriendSec'
import Footer from '../Components/Footer/Footer'

function Home () {
    return (
        <div className="Home">
            <Header/>
            <BestFriendsec/>
            <PetVetInfo/>
            <OurServices/>
            <Footer/>
        </div>
    )
}

export default Home;