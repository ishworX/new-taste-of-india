// Wroking on the Navigation bar
// Notes:
//  Logo works best with White background.
// Swithing to dark theme might make the text disapper!
import React from 'react'
import Logo from "../../assets/newTaste.png"

export const Navbar = () => {
    return <>
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container'>
            <div className="flex justify-center items-center">
            <div>
            <a href='#'>
            <img src={Logo} 
            alt='NewTasteOfIndia'
            className='w-10'/>
            New Taste Of India
            </a>
            </div>

            </div>
        </div>
    </div>
        </>;
    
}
