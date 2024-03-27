import React from "react";
import pict1 from "../asset/card1.png"
import pict2 from "../asset/card2.png"
import pict3 from "../asset/card3.png"
import Button from "@mui/material/Button";
function UserProgCard() {
    const ProgramCard = [
        {
            title: 'Front-End',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quasi.',
            image: pict1,
            altimage: 'pic1',
        },
        {
            title: 'Fullstack',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quasi.',
            image: pict2,
            altimage: 'pic2',
        },
        {
            title: 'Back-End',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quasi.',
            image: pict3,
            altimage: 'pic3',
        },
    ]
    return (
        <div className="container w-full">
            <div className="flex flex-row gap-12 justify-center">
                {ProgramCard.map((card, index) => (
                    <div className="bg-white w-1/4 h-96 flex-col rounded-3xl border">
                        <div className="w-full h-36 ">
                            <img className="object-cover object-top w-full h-full rounded-t-3xl " src={card.image} alt={card.altimage} />
                        </div>
                        <div className="px-2 flex flex-col h-60 justify-between">
                            <div>
                                <h1 className="text-black font-bold text-left text-3xl">{card.title}</h1>
                            </div>
                            <div className="flex content-start">
                                <p className="text-black ">{card.desc}</p>
                            </div>
                            <div className="text-black font-bold">
                                <Button
                                    type="submit"
                                    variant=""
                                    fullWidth
                                    href="*"
                                >
                                    DAFTAR
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default UserProgCard