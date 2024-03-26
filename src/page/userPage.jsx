import React from "react";
import NavBar from "../component/navbar";
import UserLP from "../component/userLP";

function UserPage() {
    return (
        <section>
            <NavBar />
            <div className="w-full">
                <UserLP />
            </div>
        </section>
    )
}

export default UserPage