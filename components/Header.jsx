'use client';
import React, {useState, useEffect} from 'react';
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const[header, setHeader] = useState(false);
  //console.log(pathname);

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    //remove event
    return () => window.removeEventListener('scroll', scrollYPos);
  });


  return (
    <header className={`${
      header 
      ? 'py-4 bg-white shadow-lg dark:bg-accent' 
      : 'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
          <Logo />
            <div className='flex items-center gap-x-6'>
            {/* navbar */}
              <Navbar 
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='w-full h-[2px] bg-primary absolute left-0 top-full'
              />
              <ThemeToggler />
            {/* mobile navbar */}
            <div className='xl:hidden'>
             <MobileNavbar />
            </div>
            </div>
          </div>
        </div>
    </header>
  )
};

export default Header;