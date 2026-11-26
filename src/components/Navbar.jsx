import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import searchIcon from "../assets/navbar/search.png";
import cart from "../assets/navbar/cart.png";
import fav from "../assets/navbar/fav.png";

function choosenRoute(props) { //props is object
  return props.isActive ? "text-blue-600" : "";
}


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">

      <div className="w-full bg-[#F5F5F5] py-2 text-center text-xs tracking-wide text-[#444444]">
        FREE WORLDWIDE SHIPPING ON ORDERS OVER $200 //{' '}
        <span className="font-semibold text-blue-600">CODE: NOVA24</span>
      </div>


      <nav className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between border-b border-gray-200 px-10">

        <Link to="/" className="flex items-center gap-2">

          <span className="text-2xl font-extrabold tracking-tight text-black">
            URBANOVA
          </span>
        </Link>


        <ul className="m-0 flex list-none items-center gap-8 p-0 text-sm font-semibold uppercase text-[#222]">
          <li className="hover:text-blue-600 transition-colors">
            <NavLink to="/new-arrivals" className={choosenRoute}>New Arrivals</NavLink>
          </li>
          <li className="hover:text-blue-600 transition-colors">
            <NavLink to="/men" className={choosenRoute}>Men</NavLink>
          </li>
          <li className="hover:text-blue-600 transition-colors">
            <NavLink to="/women" className={choosenRoute}>Women</NavLink>
          </li>
          <li className="hover:text-blue-600 transition-colors">
            <NavLink to="/collections" className={choosenRoute}>Collections</NavLink>
          </li>
          <li className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
            <NavLink to="/sale" className={choosenRoute}>Sale</NavLink>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <div className="flex h-11 w-[306px] items-center gap-3 rounded-xl border border-gray-200 bg-[#F5F5F5] px-4">
          <img
            src={searchIcon}
            alt="Search"
            className="h-4 w-4"
          />
            <input
              type="text"
              placeholder="Search drops, pieces..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
          </div>

          <button className="relative">
            <img src={fav} alt="fav" />
          </button>

  
          <button className="relative">
            <img src={cart} alt="cart" />
          </button>

          
          <Link to="/login" className="h-10 w-10 overflow-hidden rounded-full bg-black">
            <img src="" alt="Profile" className="h-full w-full object-cover" />
          </Link>
        </div>
      </nav>
    </header>
  )
}