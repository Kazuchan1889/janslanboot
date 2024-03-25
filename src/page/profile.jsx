import React from "react";
import Sidebar from "../component/sidebar";
import Set from "../component/userprof";

function AdminPage() {
    return (
        <section>
            <div className="flex">
                <Sidebar />
                <div className="ml-64 p-4 w-full">
                    
                </div>
                <Set />
            </div>
        </section>
    )
}

export default AdminPage