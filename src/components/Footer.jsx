import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-10 py-12">
        <div className="flex justify-between gap-16">
          <div className="max-w-[480px]">
            <p className="text-xs font-semibold tracking-wide text-blue-600">
              LIMITED DROPS &amp; EDITORIAL 
              {/* &ampl is html entity */}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black">
              ACCESS THE VAULT
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#444444]">
              Subscribe to gain private access codes to seasonal drops,
              structural lookbooks, and nocturnal capsules before general
              release.
            </p>

            <div className="mt-6 flex gap-3">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="h-12 flex-1 rounded-xl border border-gray-200 bg-[#F5F5F5] px-4 text-sm outline-none placeholder:text-gray-500"
              />
              <button className="h-12 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                JOIN
              </button>
            </div>
          </div>

  
          <div className="flex gap-24 text-sm text-[#444444]">
            <div>
              <h3 className="mb-4 font-bold uppercase text-black">Shop</h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                <li className="hover:text-blue-600 transition-colors"><Link to="/men">Men</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/women">Women</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/footwear">Footwear</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/accessories">Accessories</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/archive">Archive</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase text-black">Support</h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                <li className="hover:text-blue-600 transition-colors"><Link to="/orders">Orders</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/shipping">Shipping</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/returns">Returns</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/size-guide">Size Guide</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase text-black">Brand</h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                <li className="hover:text-blue-600 transition-colors"><Link to="/our-story">Our Story</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/sustainability">Sustainability</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/editorial">Editorial</Link></li>
                <li className="hover:text-blue-600 transition-colors"><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-xs uppercase tracking-wide text-[#444444]">
          &copy; 2024 URBANOVA. All rights reserved.
        </div>
        <div>
          <span className='rounded-2xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-0.5xl font-semibold text-gray-700 m-2'>VISA</span>
          <span className='rounded-2xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-0.5xl font-semibold text-gray-700 m-2'>MASTERCARD</span>
          <span className='rounded-2xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-0.5xl font-semibold text-gray-700 m-2'>AMEX</span>
          <span className='rounded-2xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-0.5xl font-semibold text-gray-700 m-2'>APPLE PAY</span>
          <span className='rounded-2xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-0.5xl font-semibold text-gray-700 m-2'>PAYPAL</span>
        </div>
      </div>
    </footer>
  )
}