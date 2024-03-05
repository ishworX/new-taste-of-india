import React from 'react'
import HeroImage from "../../assets/biryani3.png";
import HeroImage2 from "../../assets/biryani5.png";
import HeroImage3 from "../../assets/biryani2.png";

// import Vector from "../../assets/vector3.png";


const ImageList = [ 
    {
        id : 1,
        img: HeroImage,
    },
    {
        id : 2,
        img : HeroImage2,  
    },
    {
        id : 3,
        img : HeroImage3,
    },
];

const bgImage = {
    backgroundImage : `url(${bgImg})`,
    backGroundPosition : "center",
    backgroundSize : "cover",
    backgroundRepeat : "no-repeat",
    width: "100%",
    height : "100%",
};




const Hero = () => {
    const[imageId, setImageId] = React.useState(HeroImage);
    return <>
    <div style={bgImage}
    className='min-h-[550px] sm:min-h[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration 100 flex justify-center items-center'>
        
        <div className='container ph-b sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {}
                <div>
                    <h1>
                        Welcome to New Taste Of India 
                    </h1>
                </div> 
                {}
            </div>


        </div>

    </div>
        </>;
};

export default Hero