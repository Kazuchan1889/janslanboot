import React from "react";
import Sidebar from "../component/sidebar";
import AdminContent from "../component/adminContent";

function AdminPage() {
    return (
        <section>
            <div className="flex">
                <Sidebar />
                <div className="ml-64 p-4 w-full">
                    <AdminContent />
                </div>
            </div>
        </section>
    )
}

export default AdminPage