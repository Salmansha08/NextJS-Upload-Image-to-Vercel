import React from 'react';
import NavLink from '@/components/navbar/NavLink';

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 z-10 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
      <div></div>
    </ul>
  );
};

export default MenuOverlay;
