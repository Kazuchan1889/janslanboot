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
                <div className="flex w-1/3 justify-between font-bold text-5xl">
                    <div >
                        <a  href="/userDashboard" className="hover:text-sky-500 ease-in duration-300 size-28">Home</a>
                    </div>
                    <div className="text-2xl ">
                        <a href="/Program" className="hover:text-sky-500 ease-in duration-300">Program</a>
                    </div>
                    <div className="text-2xl ">
                        <a href="/About" className="hover:text-sky-500 ease-in duration-300">About</a>
                    </div>
                </div>
                <div className="flex w-32 justify-between">
                    <a href="/editProfile" className="text-xl">UserName</a>
                    <div className="h-8 ">
                       <AccountCircleIcon />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar