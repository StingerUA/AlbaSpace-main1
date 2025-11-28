
import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { primaryNavLinks, secondaryNavLinks, LOGO_URL } from '../constants';
import { InstagramIcon, LinkedinIcon, XIcon, ShoppingCartIcon } from './icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <RouterNavLink to="/" className="flex items-center space-x-2">
                             <div className="bg-[#458146]">
                                <img className="h-12 w-12" src={LOGO_URL} alt="AlbaSpace Logo" />
                             </div>
                        </RouterNavLink>
                    </div>

                    <div className="hidden md:flex flex-col items-end">
                        <div className="flex-wrap justify-end hidden lg:flex">
                             {primaryNavLinks.slice(0, 26).map(link => (
                                <RouterNavLink key={link.path} to={link.path} className="text-xs uppercase font-light text-gray-300 hover:text-white px-2 py-1">{link.label}</RouterNavLink>
                            ))}
                        </div>
                         <div className="flex-wrap justify-end hidden lg:flex">
                             {primaryNavLinks.slice(26).map(link => (
                                <RouterNavLink key={link.path} to={link.path} className="text-xs uppercase font-light text-gray-300 hover:text-white px-2 py-1">{link.label}</RouterNavLink>
                            ))}
                        </div>
                        <div className="mt-2 flex items-center space-x-6">
                            {secondaryNavLinks.map(link => (
                                 <RouterNavLink 
                                    key={link.path} 
                                    to={link.path} 
                                    className={({ isActive }) => 
                                        `text-sm uppercase font-medium tracking-wider text-gray-200 hover:text-white ${isActive ? 'border-b-2 border-white' : ''}`
                                    }
                                >
                                    {link.label}
                                </RouterNavLink>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white"><InstagramIcon/></a>
                        <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white"><LinkedinIcon/></a>
                        <a href="#" aria-label="X" className="text-gray-300 hover:text-white"><XIcon/></a>
                        <div className="border-l border-gray-600 h-6 mx-2"></div>
                        <a href="#" aria-label="Shopping Cart" className="text-gray-300 hover:text-white"><ShoppingCartIcon/></a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none" aria-label="Open menu">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {secondaryNavLinks.map(link => (
                            <RouterNavLink key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{link.label}</RouterNavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
