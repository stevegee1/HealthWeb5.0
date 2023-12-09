'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MenuIcon, Button } from '@/atoms';

import Logo from '@/app/assets/images/logos/logo.svg';

const items = [
  {
    id: 1,
    name: 'Home',
    path: ''
  },
  {
    id: 1,
    name: 'About',
    path: ''
  },
  {
    id: 1,
    name: 'Explore',
    path: ''
  }
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <header className="w-full bg-skyBlue relative">
      <div className="w-[90%] py-4 lg:py-2 max-w-9xl mx-auto flex justify-between items-center">
        <div className="font-uber font-bold text-deepBlue">
          <Image className="w-[150px]" alt="Healthweb5.0 logo" src={Logo} quality={100} />
        </div>
        <MenuIcon css="lg:hidden" onClick={() => setOpenNav(!openNav)} />
        <nav
          className={`fixed z-50 bg-white top-[60px] ${
            openNav ? 'right-0' : 'right-[-1200px]'
          } shadow p-4 w-full flex flex-col justify-center items-center space-y-4 lg:p-0 lg:bg-transparent lg:static lg:shadow-none lg:space-y-0 lg:space-x-4 lg:flex-row  lg:justify-between lg:items-center lg:w-fit transition-all duration-150 ease-in-out`}
        >
          {items.map((item, index) => {
            return (
              <a key={index} href="" className="font-book text-sm hover:font-groteskSB">
                {item.name}
              </a>
            );
          })}
          <Button css="w-full lg:w-fit px-4" variant="transparent" text="Log in" />
          <Button css="w-full lg:w-fit px-4" variant="filled" text="Sign Up" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
