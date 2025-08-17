/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function SidebarMobile({navLinks, setMenuOpen}) {
  const location = useLocation();

  return (
    <ul className="flex flex-col p-3 pt-20">
      {navLinks.map(({ to, label, icon: Icon }) => (
        <li
          key={label}
          className={`flex gap-x-3 items-center text-darkGray text-lg sm:text-2xl font-open font-[500] cursor-pointer
            border-b border-MediumGray border-opacity-30 last:border-b-0 py-3
            ${location.pathname === to ? 'text-mainColor' : ''}`}
        >
          <Icon size={24} aria-hidden="true" />
          <Link to={to} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
