'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from '@/components/navbar/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from '@/components/MenuOverlay';

const NavLinks = [
  {
    title: 'Home',
    href: '/',
  },
];

const Navbar = ({ title }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed h-20 w-full top-0 left-0 right-0 z-10 bg-slate-800 bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-aut px-8 py-4">
        <Link href={'/'} className="text-3xl md:text-4xl text-white font-semibold">
          {title}
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-primary-500 hover:border-primary-500">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-primary-500 hover:border-primary-500">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-xl font-bold">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {/* <NavButton /> */}
      </div>
      {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
