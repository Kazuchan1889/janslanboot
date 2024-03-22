import { TextField } from "@mui/material";
import React from "react";
import EditProfile from "../component/editProfile";
import Sidebar from "../component/sidebar";

function ProfilePage() {
    return (
        <section>
            <div className="flex">
                <Sidebar />
                <div className="ml-64 w-full">
                    <EditProfile />
                </div>
            </div>
        </section>
    )
}
export default ProfilePage;