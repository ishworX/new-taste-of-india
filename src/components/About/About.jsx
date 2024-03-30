import React from "react";
import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const About = () => {
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
                            {/* text content section */}
                            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                                <h1 className="text-3xl sm:text-4xl font-bold">
                                    About Us
                                </h1>
                                <p className="text-sm text-gray-500 tracking-wide leading-5">
                                    In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and architecture. Best recipes and awesome spices are blended together in perfect ratio to give healthy meals to each and every one who come to us with the taste that lasts forever.
                                    <ul>
                                        <li>Serving High Quality Multi-cuisines </li>
                                        <li>Personalised Friendly Service</li>
                                        <li>Exclusive Catering facilities</li>
                                    </ul>
                                    <br />
                                    New Taste Of India is designed for relaxation and great times. We provide an extensive menu of delicious Indian food and a modern environment suitable for family dinners, romantic dates, power lunches and meetups with friends. From curries bursting with flavor to exotic dishes straight from the heart of India, we welcome you into your family-operated kitchen.
                                </p>
                                <div className="flex gap-6">
                                    <div>
                                        <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                                    </div>
                                    <div>
                                        <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                                    </div>
                                    <div>
                                        <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;