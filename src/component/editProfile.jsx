import React from "react";
import { TextField, Button } from "@mui/material";

function EditProfile() {
    return (
        <section className="back p-4 h-screen">
            <div className="text-left ">
                <h1 className="text-black font-bold">Edit Profile</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="w/12">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h1 className="text-black font-bold">Change Profile</h1>
                    </div>
                    <form action="">
                        <div className="mb-4 mt-4">
                            <TextField
                                type="text"
                                label="email"
                                size="small"
                                required
                                fullWidth
                            />
                        </div>
                        <div className="mb-4 mt-4">
                            <TextField
                                type="text"
                                label="Username"
                                size="small"
                                required
                                fullWidth
                            />
                        </div>
                        <div className="mb-4 mt-4">
                            <TextField
                                type="text"
                                label="birthdate"
                                size="small"
                                required
                                fullWidth
                            />
                        </div>
                        <div className="mb-4 mt-4">
                            <TextField
                                type="text"
                                label="PhoneNumber"
                                size="small"
                                required
                                fullWidth
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                variant="contained"
                            >
                                SUBMIT
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default EditProfile