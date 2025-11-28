
import React from 'react';
import { InstagramIcon, LinkedinIcon, XIcon } from './icons';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Column 1: Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img className="h-16 w-16 mb-4" src={LOGO_URL} alt="AlbaSpace Logo" />
            <p className="text-xl font-semibold text-white">Geleceğinizi Uzaya Taşıyın!</p>
          </div>

          {/* Column 2: Social and Emails */}
          <div className="flex flex-col items-center space-y-4">
             <div className="flex space-x-6">
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><InstagramIcon className="h-7 w-7"/></a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><LinkedinIcon className="h-7 w-7"/></a>
                <a href="#" aria-label="X" className="text-gray-400 hover:text-white"><XIcon className="h-7 w-7"/></a>
             </div>
             <div>
                <a href="mailto:idris@albaspace.com.tr" className="block hover:text-white">idris@albaspace.com.tr</a>
                <a href="mailto:hello@albaspace.com.tr" className="block hover:text-white mt-2">hello@albaspace.com.tr</a>
             </div>
          </div>

          {/* Column 3: Address and Phone */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2">
             <p>YETSAN Karşıyaka İş Merkezi G Blok No: 26<br/>Sarıçam / ADANA</p>
             <a href="tel:+905387781018" className="hover:text-white">+90 538 778 10 18</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
