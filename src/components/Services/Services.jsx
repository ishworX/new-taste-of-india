import React from 'react';
import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Services = () => {
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

    return (
        <>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                    Lorem, ipsum dolor.
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque reiciendis inventore iste ratione ex alias quis magni at
                    optio
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae ab sed, exercitationem minima aliquid eligendi
                    distinctio? Fugit repudiandae numquam hic quo recusandae.
                    Excepturi totam ad nam velit quasi quidem aspernatur.
                </p>
            </div>
            <div>Services</div>
            <p>
                In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and architecture. Best recipes and awesome spices are blended together in perfect ratio to give healthy meals to each and every one who come to us with the taste that lasts forever.
            </p>
            <ul>
                <li> Serving High Quality Multi-cuisines</li>
                <li> Personalised Friendly Service </li>
                <li> Exclusive Catering facilities</li>
            </ul>
        </>
    )
}

export default Services