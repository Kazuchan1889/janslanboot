import React from "react";
import NavBar from "../component/navbar";
import UserLPAbt from "../component/userLPAAbout";


function AboutPage(){
    return(
        <section>
            <NavBar />
            <div className="w-full">
                <UserLPAbt />
            </div>
            
        </section>
    )
}

export default AboutPage