import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { primaryNavLinks, secondaryNavLinks, LOGO_URL } from '../constants';
import { InstagramIcon, LinkedinIcon, XIcon, ShoppingCartIcon } from './icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <RouterNavLink to="/" className="flex items-center space-x-2">
                            <div className="bg-[#458146]">
                                <img className="h-12 w-12" src={LOGO_URL} alt="AlbaSpace Logo" />
                            </div>
                        </RouterNavLink>
                    </div>

                    <div className="hidden md:flex flex-col items-center flex-1 px-4">
                        <nav className="w-full overflow-x-auto">
                            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 whitespace-nowrap">
                                {primaryNavLinks.map(link => (
                                    <RouterNavLink
                                        key={link.path}
                                        to={link.path}
                                        className="text-[11px] uppercase font-semibold tracking-tight text-gray-200 hover:text-white px-1"
                                    >
                                        {link.label}
                                    </RouterNavLink>
                                ))}
                            </div>
                        </nav>
                        <div className="mt-3 flex items-center space-x-6">
                            {secondaryNavLinks.map(link => (
                                <RouterNavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-sm uppercase font-medium tracking-tight text-gray-200 hover:text-white ${isActive ? 'border-b-2 border-white' : ''}`
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
                    <div className="px-3 pt-3 pb-4 space-y-3">
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Modeller</p>
                            <div className="grid grid-cols-2 gap-1">
                                {primaryNavLinks.map(link => (
                                    <RouterNavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                                    >
                                        {link.label}
                                    </RouterNavLink>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-gray-700 pt-3">
                            <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Menü</p>
                            <div className="space-y-1">
                                {secondaryNavLinks.map(link => (
                                    <RouterNavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                                    >
                                        {link.label}
                                    </RouterNavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
