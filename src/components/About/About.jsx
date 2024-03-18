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
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: Img2,
        name: "Home Catering",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: Img2,
        name: "Special Occasion Dinner",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];

const About = () => {
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
                                        {/* <StarRatings
                          rating={4}
                          starRatedColor="yellow"
                          isSelectable={false}
                          starHoverColor="yellow"
                          // starSelectingHoverColor
                          starDimension="20px"
                          changeRating={() => {}}
                          numberOfStars={5}
                          name="rating"
                        /> */}
                                    </div>
                                    <h1 className="text-xl font-bold">{service.name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
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

export default About;



// Make a seperate section on about me :

// Heading Title : ABOUT RESTAURANT
// In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and architecture. Best recipes and awesome spices are blended together in perfect ratio to give healthy meals to each and every one who come to us with the taste that lasts forever.

// Serving High Quality Multi-cuisines
// Personalised Friendly Service
// Exclusive Catering facilities
// New Taste Of India is designed for relaxation and great times. We provide an extensive menu of delicious Indian food and a modern environment suitable for family dinners, romantic dates, power lunches and meetups with friends. From curries bursting with flavor to exotic dishes straight from the heart of India, we welcome you into your family-operated kitchen.

