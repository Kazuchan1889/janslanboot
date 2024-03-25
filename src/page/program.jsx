import React from "react";
import NavBar from "../component/navbar";
import Userpprog from "../component/userLPProg";

function UserPage(){
    return(
        <section>
            <NavBar />
            <div className="w-full">
                <Userpprog />
            </div>
            
        </section>
    )
}

export default UserPage