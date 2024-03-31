import React from 'react'
// import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
// import StarRatings from "react-star-ratings";

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Private Party",
        description:
            "We are able to provide a traditional Indian private party service for any of your special occasions. The New Taste Of India team's service will enable you to serve all your favourite Indian dishes to your guests, with the same high standard you would expect in our restaurant.",
    },
    {
        id: 2,
        img: Img2,
        name: "Home Catering",
        description:
            "Make New Taste Of India the venue for vour next special occasion event or get-together functions. Music can be arranged for corporate dance and our managers will ensure your event runs smoothly. It can also be perfect for holding your office Christmas party. Special dietary requirements can be catered for.",
    },
    {
        id: 3,
        img: Img2,
        name: "Special Occasion Dinner",
        description:
            "Make New Taste Of India the venue for your next special occasion event or get-together functions. Music can be arranged for corporate dance and our managers will ensure your event runs smoothly. It can also be perfect for holding your office Christmas party. Special dietary requirements can be catered for.",
    },
];

const Services = () => {
    return (
        <>
            <span id="services"></span>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
                            Our Services
                        </p>
                        <h1 className="text-3xl font-bold">Services</h1>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Perspiciatis delectus architecto error nesciunt,
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {ServicesData.map((service) => (
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="300"
                                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                            >
                                <div className="h-[100px]">
                                    <img
                                        src={service.img}
                                        alt=""
                                        className="max-w-[200px] block mx-auto transform -translate-y-14
                      group-hover:scale-105 group-hover:rotate-6 duration-300"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <div className="w-full ">

                                    </div>
                                    <h1 className="text-xl font-bold">{service.name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-8">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;

