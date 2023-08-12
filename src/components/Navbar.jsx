import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white text-black p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                    <Link to='/' className="text-lg font-semibold">Your Logo</Link>
                </div>
                <div className="space-x-4 md:hidden">
                    <button onClick={toggleMenu} className="p-1 px-3 hover:bg-blue-300 rounded-md">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`space-x-4 md:space-x-0 md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <Link to='/rent' className="p-1 px-3 hover:bg-blue-300 rounded-md block md:inline">
                        Rent
                    </Link>
                    <Link to='/buy' className="p-1 px-3 hover:bg-blue-300 rounded-md block md:inline">
                        Buy
                    </Link>
                    <Link to='/sell' className="p-1 px-3 hover:bg-blue-300 rounded-md block md:inline">
                        Sell
                    </Link>
                    <div className="relative group inline-block">
                        <button className="p-1 px-3  hover:bg-blue-300 rounded-md ">Manage Property</button>
                        <ul className={`absolute hidden group-hover:block bg-white py-2 mt-2 space-y-2 ${isMenuOpen ? 'block' : 'hidden'} `}>
                            <li><a href="/">Add Property</a></li>
                            <li><a href="/">Edit Property</a></li>
                            <li><a href="/">Delete Property</a></li>
                        </ul>
                    </div>
                    <div className="relative group inline-block">
                        <button className="p-1 px-3 hover:bg-blue-300 rounded-md">Resources</button>
                        <ul className={`absolute hidden group-hover:block bg-white py-2 mt-2 space-y-2   ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <li><a href="/">Guides</a></li>
                            <li><a href="/">Tutorials</a></li>
                            <li><a href="/">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="space-x-4 mr-5">
                <button className="text-black border border-blue-300 p-2 px-3 rounded-md hover:bg-blue-500 ">Login</button>
                <button className="text-black bg-blue-500 p-2 px-3 rounded-md">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;
