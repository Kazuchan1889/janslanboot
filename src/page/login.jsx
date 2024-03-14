import React from "react";
import LoginLogo from "../asset/Group 2286.png"
import TextField from "@mui/material/TextField";
function Login() {
    return (
        <div className="p-2 ">
            <div>
                <img className="w-16 " src={LoginLogo} alt="LL" />
            </div>
            <div>
                <h1 className="font-bold">Sign In</h1>
            </div>
            <form action="">
                <div>
                    <TextField 
                    id="email"

                    label="username"
                    variant=""
                    />
                </div>
            </form>
        </div>
    )
}
export default Login