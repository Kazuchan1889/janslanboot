import React from "react";

function Sidebar(){
    return(
        <div className="bg-gray-800 text-white h-screen w-64 flex flex-col drawer items-center pos lg:drawer-open sm:overflow-hidden" >
            <div className='w-full bg-base-200 flex justify-center p-4'>
                <img className='items-center w-14' alt="" />
            </div>
            <div className='w-full bg-base-200 flex items-center justify-center p-4'>
                <div className='relative'>
                    <img className='ring-2 ring-white rounded-full w-32 h-32' alt="" />
                    <h1 className='text-center pt-4 font-bold'>Name</h1>
                    <h1 className='text-center pt-2'>admin</h1>
                </div>
            </div>
            <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content font-bold text-center ">
                {/* Sidebar content here */}
                <li><a>Home</a></li>
                <li><a>Setting</a></li>
            </ul>
        </div>
    )
}

export default Sidebar