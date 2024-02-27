import React from 'react'
import Logo from "../../assets/newTaste-logo.png";

const Navbar = () => {
    return (
        <>
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                    <img src={Logo} alt="Logo" className="w-10" /> 
                    New Taste Of India

                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;