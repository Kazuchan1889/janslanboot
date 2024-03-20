import React from "react";
import Logos from "../asset/Group 2286.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
    return (
        <header>
            <div className="pl-4 pr-4 w-full h-12 flex flex-row flex-wrap justify-between items-center navBack">
                <div className="w-8">
                    <img src={Logos} alt="" />
                </div>
                <div className="flex w-1/3 justify-between font-bold">
                    <div>
                        <a href="">Home</a>
                    </div>
                    <div>
                        <a href="">Program</a>
                    </div>
                    <div>
                        <a href="">About</a>
                    </div>
                </div>
                <div className="flex w-32 justify-between">
                    <h2>UserName</h2>
                    <div className="h-8">
                       <AccountCircleIcon />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar