import React from "react";
import Button from "@mui/material/Button";
import Pipel from "../asset/pipel.png";
import Footer from "./footer";
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
                        <img src={Pipel} alt="pipel" />
                    </div>
                </div>
            </div>
            <div className="w-full bggs">
                <div className="h-full p-4 flex items-center">
                    <div className="w-1/3 font-bold text-3xl">
                        <h1>HBM BOOTCAMP</h1>
                    </div>
                    <div className="w-full text-left font-bold text-2xl">
                        <p>
                            Program Dicoding Bootcamp bertujuan untuk menghasilkan talenta berstandar tinggi yang sesuai dengan standar industri.
                        </p>
                        <p className="mt-8 mb-8">
                            Proses pembelajaran yang dilakukan adalah intensive learning. Materi diberikan secara asynchronous (online melalui modul belajar di Dicoding Indonesia) dan akan di-review setiap interval waktu tertentu oleh para expert.
                        </p>
                        <p>
                            Program ini akan ditutup dengan capstone project, peserta akan bekerja dalam kelompok dan mengembangkan solusi atas studi kasus yang diberikan, mulai dari masalah yang terjadi dalam masyarakat hingga industri. Project tersebut dapat memberikan gambaran penuh tentang berkarier dalam bidang IT.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen">
                <div className="h-full p-4 flex flex-col align-center">
                    <div className="font-bold text-3xl">
                        <h1>Daftar Harga</h1>
                    </div>
                    <div className="pt-4 flex flex-row content-around font-bold text-xl">
                        <div className="flex flex-col w-1/3">
                            <h1>Front-End</h1>
                        </div>
                        <div className="flex flex-col w-1/3">
                            <h1>Full Stack</h1>
                        </div>
                        <div className="flex flex-col w-1/3">
                            <h1>Back-End</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-white px-8 py-8">
                <Footer />
            </div>
        </section>
    )
}

export default UserLP