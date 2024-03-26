import React from "react";
import Button from "@mui/material/Button";
import Footer from "./footer";
import ReactPlayer from 'react-player';
import UserProgCard from "./userProgCard";

function UserLPProg() {
  return (
    <section>
      <div className="progback">
        <div className="h-full flex flex-row">
          <div className="w-2/4 text-left p-8 text-3xl font-bold">
            <p className="mt-8 pr-16 text-3xl">
              Berkarir di Kancah Global dengan Digital & English Skill di HBM Bootcamp
            </p>
            <div className="flex space-x-4">
              <Button
                type="submit"
                variant="contained"
                href="https://www.16personalities.com/free-personality-test"
              >
                Take test!
              </Button>
              <Button
                type=""
                variant="contained"
                href="/program/#midle"
              >
                Lihat Program
              </Button>
            </div>
          </div>
          <div className="w-2/3 mt-32 mb-32 mr-12" style={{ aspectRatio: '16 / 9' }}>
            <ReactPlayer
              url="https://youtu.be/Ak6VTSekGP4?si=lSsvMeZwghRvTV82"
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="h-full w-full px-8 py-16 ">
        <UserProgCard />
      </div>
      <div className="bg-gray-800 text-white px-8 py-8 w-full h-full">
        <Footer />
      </div>
    </section>
  )
}
export default UserLPProg;
