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
    backgorundSize : "cover",
    backgroundRepeat : "no-repeat",
    width: "100%",
    height : "100%",
};




const Hero = () => {
  return (
    <div>
        <div>

        </div>
    </div>
  )
}

export default Hero