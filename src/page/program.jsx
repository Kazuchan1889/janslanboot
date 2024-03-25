import React from "react";
import NavBar from "../component/navbar";
import Userpprog from "../component/userLPProg";

function ProgramPage(){
    return(
        <section>
            <NavBar />
            <div className="w-full">
                <Userpprog />
            </div>
            
        </section>
    )
}

export default ProgramPage