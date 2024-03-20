import React from "react";
import LoginLogo from "../asset/Group 2286.png"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";



function Login() {

    const navigate = useNavigate();

    const sub = async (e) => {
        e.preventDefault();
        try{
            navigate("/adminDashboard");
            alert("Login Success");
        }catch{
            console.err("Wrong")
        }
    }

    return (
        <section>
            <div className="h-screen w-full flex justify-center items-center">
                <div className="p-8 w-1/2 h-3/4 back flex flex-col items-center rounded-xl">
                    <div className="mb-4">
                        <img className="w-16 " src={LoginLogo} alt="LL" />
                    </div>
                    <div className="mb-4">
                        <h1 className="font-bold text-3xl">Sign In</h1>
                    </div>
                    <div className="w-full pl-12 pr-12">
                        <form action="" onSubmit={ sub }>
                            <div className="mb-4 mt-4">
                                <TextField
                                    type="text"
                                    label="Username"
                                    size="small"
                                    required
                                    fullWidth
                                />
                            </div>
                            <div className="mt-4 mb-4">
                                <TextField
                                    type="password"
                                    label="Password"
                                    size="small"
                                    fullWidth
                                    required
                                // color="warning"
                                />
                            </div>
                            <div className="flex justify-center">
                                <div className="font-bold mt-4 w-3/4">
                                    <Button
                                        style={{ backgroundColor: "#144272" }}
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                    >
                                        LOGIN
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login