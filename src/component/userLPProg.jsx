import React from "react";
import Button from "@mui/material/Button";
import Footer from "./footer";
import ReactPlayer from 'react-player';
import card1 from "../asset/card1.png";
import card2 from "../asset/card2.png";
import card3 from "../asset/card3.png";
import HTML from "../asset/htm.png";
import TAIL from "../asset/tail.png";
import REACT from "../asset/react.png";
import CSS from "../asset/css.png";
import CSHA from "../asset/csha.png";
import JAVAS from "../asset/javas.png";
import JAVA from "../asset/java.png";



function UserLPProg(){
    return(
        <section className="width: '300px', height: '300px'">
            <div className="progback">
                <div className="h-full flex flex-row">
                    <div className="w-2/4 text-left p-8 text-3xl font-bold">
                        
                        <p className="mt-8 pr-16 text-9xl">
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
                    <div className="w-2/3 mt-32 mr-4"  style={{ aspectRatio: '16 / 9' }}>
                    <ReactPlayer
                        url="https://youtu.be/Ak6VTSekGP4?si=lSsvMeZwghRvTV82"
                        controls
                        width="100%"
                        height="100%"
                    />
                    </div>
                    
                </div>
            </div>

     <section>

        <div className="flex-col align-center p-">
     <div className="w-full h-[44.063rem] relative bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-[8.75rem] px-[35.938rem] box-border gap-[80.781rem] tracking-[normal] lg:gap-[80.781rem_40.375rem] lg:pl-[17.938rem] lg:pr-[17.938rem] lg:box-border mq450:gap-[80.781rem_10.125rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[80.781rem_20.188rem] mq750:pl-[8.938rem] mq750:pr-[8.938rem] mq750:box-border">
      
      <div className="h-[26.563rem] w-[18.125rem] relative rounded-mini bg-gainsboro hidden" />
      <div className="h-[26.563rem] w-[18.125rem] relative rounded-mini bg-gainsboro hidden" />
      
      <div className="h-[14.375rem] w-[18.125rem] relative bg-white hidden" />
      <div className="h-[4.813rem] w-[18.125rem] relative rounded-mini bg-aliceblue hidden" />
      <div className="h-[26.563rem] w-[18.125rem] relative rounded-mini bg-gainsboro hidden" />
      {/* card */}
      <div className="flex flex-row-reverse p-4">
      <div className="h-[26.563rem] w-[18.125rem] rounded-mini bg-gainsboro flex flex-col items-start justify-start shrink-0 [debug_commit:f6aba90] z-[6] text-left text-[1.5rem] text-black font-inter">
      <div className="self-stretch h-[26.563rem] relative rounded-mini bg-gainsboro hidden z-[1]" />
      <img
        className="self-stretch h-[12.063rem] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover [debug_commit:f6aba90] z-[7]"
        alt=""
        src={card1}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.188rem] mt-[-3.437rem]">
        <div className="flex-1 bg-white flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[6.313rem] gap-[0.094rem] shrink-0 [debug_commit:f6aba90] z-[8]">
          <div className="self-stretch h-[14.375rem] relative bg-white hidden" />
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.563rem]">
            <div className="flex flex-row items-start justify-start relative">
              <i className="relative inline-block font-extrabold min-w-[7.462rem] z-[9] mq450:text-[1.188rem]">
                Full-Stack
              </i>
              <img
                className="h-[2.8rem] w-[2.8rem] absolute !m-[0] right-[0.200rem] bottom-[-2.562rem] object-cover z-[10]"
                loading="lazy"
                alt=""
                src={REACT}
              />
            </div>
          </div>
          <div className="h-[2.563rem] flex flex-row items-start justify-start gap-[0.031rem]">
            <div className="h-[2.125rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="w-[2rem] h-[1.875rem] relative object-cover z-[9]"
                loading="lazy"
                alt=""
                src={JAVAS}
              />
            </div>
            <div className="h-[2.125rem] w-[2.688rem] flex flex-col items-start justify-start pt-[0.10rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="w-[2.688rem] h-[1.625rem] relative object-cover z-[9]"
                loading="lazy"
                alt=""
                src={TAIL}
              />
            </div>
          </div>
          <div className="w-[12.875rem] flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border text-[1.25rem]">
            <div className="h-[2.625rem] flex-1 relative inline-block z-[9] mq450:text-[1rem]">{`learning about front end development `}</div>
          </div>
        </div>
      </div>
      <Button
    className="self-stretch h-[4.813rem] shrink-0 [debug_commit:f6aba90] z-[9] mt-[-3.437rem]"
    disableElevation={true}
    variant="contained"
    href="/"
    sx={{
        textTransform: "none",
        color: "#000",
        fontSize: "24",
        background: "#e0f4ff",
        borderRadius: "15px",
        "&:hover": { background: "#e0f4ff" },
        height: 77,
        marginTop: "-2.5rem" // Penyesuaian margin-top
    }}
    >
    Daftar Sekarang!
    </Button>

      {/* card1 */}
      
    </div>
    <div className="flex p-8 flex-row-reverse " id="midle">
      <div className="h-[26.563rem] w-[18.125rem] rounded-mini bg-gainsboro flex flex-col items-start justify-start shrink-0 [debug_commit:f6aba90] z-[6] text-left text-[1.5rem] text-black font-inter">
      <div className="self-stretch h-[26.563rem] relative rounded-mini bg-gainsboro hidden z-[1]" />
      <img
        className="self-stretch h-[12.063rem] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover [debug_commit:f6aba90] z-[7]"
        alt=""
        src={card2}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.188rem] mt-[-3.437rem]">
        <div className="flex-1 bg-white flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[6.313rem] gap-[0.094rem] shrink-0 [debug_commit:f6aba90] z-[8]">
          <div className="self-stretch h-[14.375rem] relative bg-white hidden" />
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.563rem]">
            <div className="flex flex-row items-start justify-start relative">
              <i className="relative inline-block font-extrabold min-w-[7.462rem] z-[9] mq450:text-[1.188rem]">
                Back-End
              </i>
              <img
                className="h-[2.75rem] w-[1.938rem] absolute !m-[0] right-[1.8rem] bottom-[-2.562rem] object-cover z-[10]"
                loading="lazy"
                alt=""
                src={JAVA}
              />
            </div>
          </div>
          <div className="h-[2.563rem] flex flex-row items-start justify-start gap-[0.031rem]">
            <div className="h-[2.125rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="w-[2rem] h-[1.875rem] relative object-cover z-[9]"
                loading="lazy"
                alt=""
                src={JAVAS}
              />
            </div>
            <div className="h-[2.125rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="w-[2rem] h-[1.875rem] relative object-cover z-[9]"
                loading="lazy"
                alt=""
                src={CSHA}
              />
            </div>
          </div>
          <div className="w-[12.875rem] flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border text-[1.25rem]">
            <div className="h-[2.625rem] flex-1 relative inline-block z-[9] mq450:text-[1rem]">{`learning about front end development `}</div>
          </div>
        </div>
      </div>
      <Button
    className="self-stretch h-[4.813rem] shrink-0 [debug_commit:f6aba90] z-[9] mt-[-3.437rem]"
    disableElevation={true}
    variant="contained"
    href="/"
    sx={{
        textTransform: "none",
        color: "#000",
        fontSize: "24",
        background: "#e0f4ff",
        borderRadius: "15px",
        "&:hover": { background: "#e0f4ff" },
        height: 77,
        marginTop: "-2.5rem" // Penyesuaian margin-top
    }}
    >
    Daftar Sekarang!
    </Button>
    </div>
    </div>
    <div className="flex flex-row-reverse">
      <div className="h-[26.563rem] w-[18.125rem] rounded-mini bg-gainsboro flex flex-col items-start justify-start shrink-0 [debug_commit:f6aba90] z-[6] text-left text-[1.5rem] text-black font-inter">
      <div className="self-stretch h-[26.563rem] relative rounded-mini bg-gainsboro hidden z-[1]" />
      <img
        className="self-stretch h-[12.063rem] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover [debug_commit:f6aba90] z-[7]"
        alt=""
        src={card3}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.188rem] mt-[-3.437rem]">
        <div className="flex-1 bg-white flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[6.313rem] gap-[0.094rem] shrink-0 [debug_commit:f6aba90] z-[8]">
          <div className="self-stretch h-[14.375rem] relative bg-white hidden" />
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.563rem]">
            <div className="flex flex-row items-start justify-start relative">
              <i className="relative inline-block font-extrabold min-w-[7.462rem] z-[9] mq450:text-[1.188rem]">
                Front-End
              </i>
              <img
                className="h-[2.75rem] w-[1.938rem] absolute !m-[0] right-[-1.287rem] bottom-[-2.562rem] object-cover z-[10]"
                loading="lazy"
                alt=""
                src={HTML}
              />
            </div>
          </div>
          <div className="h-[2.563rem] flex flex-row items-start justify-start gap-[0.031rem]">
            <div className="h-[2.125rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="w-[2rem] h-[1.875rem] relative object-cover z-[9]"
                loading="lazy"
                alt=""
                src={REACT}
              />
            </div>
            <div className="h-[2.125rem] w-[2.688rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="w-[2.688rem] h-[1.625rem] relative object-cover z-[9]"
                loading="lazy"
                alt=""
                src={CSS}
              />
            </div>
            <img
              className="h-[2.125rem] w-[2.688rem] flex flex-col items-start justify-start pt-[0.10rem] px-[0rem] pb-[0rem] box-border"
              loading="lazy"
              alt=""
              src={TAIL}
            />
          </div>
          <div className="w-[12.875rem] flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border text-[1.25rem]">
            <div className="h-[2.625rem] flex-1 relative inline-block z-[9] mq450:text-[1rem]">{`learning about front end development `}</div>
          </div>
        </div>
      </div>
      <Button
    className="self-stretch h-[4.813rem] shrink-0 [debug_commit:f6aba90] z-[9] mt-[-3.437rem]"
    disableElevation={true}
    variant="contained"
    href="/"
    sx={{
        textTransform: "none",
        color: "#000",
        fontSize: "24",
        background: "#e0f4ff",
        borderRadius: "15px",
        "&:hover": { background: "#e0f4ff" },
        height: 77,
        marginTop: "-2.5rem" // Penyesuaian margin-top
    }}
    >
    Daftar Sekarang!
    </Button>
    </div>
    </div>
    </div>
    </div>
    </div>
    


     </section>
            
           
        <div className="bg-gray-800 text-white px-8 py-8">
                <Footer />
            </div>
        </section>
    )
}
export default UserLPProg;
