import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-slate-900 text-white px-3 py-2 flex justify-between items-center'>
      <div>LOGO</div>
      <nav className='flex gap-3 items-center'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? "text-gray-500" : "text-white"
          }>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-gray-500" : "text-white"
          }
          to='/about'>
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-gray-500" : "text-white"
          }
          to='/contact'>
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-gray-500" : "text-white"
          }
          to='/signup'>
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
}
