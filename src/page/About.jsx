import React from "react";
import NavBar from "../component/navbar";
import UserLPAbt from "../component/userLPAAbout";


function UserPage(){
    return(
        <section>
            <NavBar />
            <div className="w-full">
                <UserLPAbt />
            </div>
            
        </section>
    )
}

export default UserPage