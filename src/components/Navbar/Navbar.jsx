// Wroking on the Navigation bar
// Notes:
//  Logo works best with White background.
// Swithing to dark theme might make the text disapper!
import React from 'react'
import Logo from "../../assets/newTaste-logo.png"

export const Navbar = () => {
    return <>
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container'>
            <div className="flex justify-between items-center ">
            <div>
            <a href='#' className='flex items-center gap-2 text-2xl sm:text-2xl font-bold'>
            <img src={Logo} 
            alt='NewTasteOfIndia'
            className='w-10'/>
            New Taste Of India
            </a>
            </div>
            <ul className='hidden sm:flex gap-4'>
                <li>
                    <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Home</a>
                </li>
                <li>
                    <a href="#" className='inline-block py-4 px-4 hover:text-primary'>About</a>
                </li>
                <li>
                    <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
                </li>
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Order
            </button>
            </div>
        </div>
    </div>
    </>;
    
}
