import React from "react";
import Button from "@mui/material/Button";
import Pipel from "../asset/pipel.png";
function UserLP() {
    return (
        <section className="">
            <div className="usrLPBack">
                <div className="h-full flex flex-row">
                    <div className="w-2/3 text-left p-8 text-3xl font-bold">
                        <h1>Jadilah Developer Profesional</h1>
                        <h1>Bersama HBM Bootcamp</h1>
                        <p className="mt-8 pr-16 text-2xl">
                            Lebih dari 1200+ lulusan program intensif Dicoding telah mendapatkan pekerjaan. Dapatkan potongan subsidi hingga 9 juta rupiah untuk paket pelatihan React dan Back-End Developer.<br />    Terbatas untuk 5 peserta!
                        </p>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            DAFTAR
                        </Button>
                    </div>
                    <div className="w-1/3 mt-32">
                        <img src={ Pipel } alt="pipel" />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}

export default UserLP