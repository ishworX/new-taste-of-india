import React from 'react';
// import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";
// import { GrSecure } from "react-icons/gr";
// import { IoFastFood } from "react-icons/io5";
// import { GiFoodTruck } from "react-icons/gi";

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
            <div className="min-h-[550px]">
                <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
                    <div
                        data-aos="slide-up"
                        data-aos-duration="300"
                        className="container"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Image section */}
                            <div>
                                <img
                                    src={BiryaniImg}
                                    alt="biryani img"
                                    className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                                <h1 className="text-3xl sm:text-4xl font-bold">
                                    About the Restaurant
                                </h1>
                                <p className="text-sm text-gray-500 tracking-wide leading-5">
                                    In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and architecture. Best recipes and awesome spices are blended together in perfect ratio to give healthy meals to each and every one who come to us with the taste that lasts forever.
                                    <br />
                                    <br />
                                    <ul>
                                        <li> Serving High Quality Multi-cuisines</li>
                                        <li> Personalised Friendly Service </li>
                                        <li> Exclusive Catering facilities</li>
                                    </ul>
                                </p>
                            </div>
                            
                        </>
                        )
}

                        export default Services

// Things that needed to be fixed:?
// List is not showing up 
// Need a picture of the restaurant
// Might have to change the about us message
