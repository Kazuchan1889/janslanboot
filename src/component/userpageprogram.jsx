import React from "react";
import Button from "@mui/material/Button";
import Pipel2 from "../asset/pipel2.png";
import vec1 from "../asset/Vector.png";
import vec2 from "../asset/Vector2.png";
import vec3 from "../asset/Vector3.png";
import Footer from "./footer";
function UserLPProgram() {
  return (
    <section className="">
      <div className="abtback">
        <div className="h-full flex flex-row">
          <div className="w-2/3 text-left p-8 text-3xl font-bold">
            <h1>We are Hexaon</h1>
            <h1>Business Mitrasindo</h1>
            <p className="mt-8 pr-16 text-2xl">
              Established on July 14, 2008, PT Hexaon Business Mitrasindo or better known as Hexaon has become a leading provider of integrated technology in Indonesia.  Hexaon always offer cutting edge technology with solutions that representative as client requirements accurately with the low of total cost of ownership, but with a comprehensive and integrated solution.
            </p>
            <Button
              type="submit"
              variant="contained"
            >
              Read More
            </Button>
          </div>
          <div className="w-1/3 mt-32 mr-4">
            <img src={Pipel2} alt="pipel2" />
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="visi-misi-wrapper ">
          <i className="visi-misi">{`Visi & Misi`}</i>
        </div>
        <section className="frame-parent">
          <div className="frame-wrapper">
            <div className="values-container-parent">
              <div className="values-container">
                <img
                  className="integrity-compassion-quality-c"
                  loading="lazy"
                  alt=""
                  src={vec1}
                />
              </div>
              <div className="increasing-student-interest-parent">
                <div className="increasing-student-interest">
                  <div className="mission">MISSION</div>
                </div>
                <div className="meningkatkan-minat-belajar">{`meningkatkan minat belajar komputer untuk siswa yang ada di indonesia `}</div>
              </div>
            </div>
          </div>
          <div className="line-wrapper">
            <div className="frame-child" />
          </div>
          <div className="frame-container">
            <div className="frame-group">
              <div className="v-i-s-i-o-n-parent">
                <div className="v-i-s-i-o-n">
                  <img
                    className="leading-in-industry"
                    loading="lazy"
                    alt=""
                    src={vec2}
                  />
                </div>
                <div className="values">VALUES</div>
              </div>
              <div className="integrity-compassion-quality-c1">
                <div className="integrity-compassion-quality-container">
                  <ul className="integrity-compassion-quality-c2">
                    <li className="integrity">- Integrity</li>
                    <li className="compassion">- Compassion</li>
                    <li className="quality">- Quality</li>
                    <li className="collaboration">- Collaboration</li>
                    <li>- Accountability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="line-container">
            <div className="frame-item" />
          </div>
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="vision-box-wrapper">
                <div className="vision-box">
                  <img
                    className="kami-berusaha-keras-menjadi-pe"
                    loading="lazy"
                    alt=""
                    src={vec3}
                  />
                  <div className="vision">VISION</div>
                </div>
              </div>
              <div className="kami-berusaha-keras">
                Kami berusaha keras untuk menjadi pemimpin di kawasan ini dalam
                keunggulan teknologi, pengalaman dan inovasi untuk meningkatkan
                kualitas hidup semua murid kami.
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-gray-800 text-white px-8 py-8">
        <Footer />
      </div>
    </section>
  )
}

export default UserLPProgram
