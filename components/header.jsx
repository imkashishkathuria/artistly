"use client";

import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'> 
        <div className='text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 animate-fade-in transition duration-300 hover:scale-105 hover:brightness-110 cursor-pointer'>
          <Link href="/">ArtistsLy</Link>
        </div>

         <nav className="hidden md:flex gap-6 text-black font-medium">
          <Link href="/">Home</Link>
          <Link href="/artists">Explore Artists</Link>
          <Link href="/onboard">Become an Artist</Link>
        </nav>

        <div className="hidden md:flex flex-row gap-4">
          <Link href="">
            <button className="bg-purple-600 text-white text-md font-bold px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Login / Sign Up
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="bg-purple-600 text-white text-md font-bold px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Dashboard
            </button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={27} /> : <Menu size={24} />}
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 flex flex-col items-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link href="/artists" onClick={() => setIsOpen(false)} className="block">
            Explore Artists
          </Link>
          <Link href="/onboard" onClick={() => setIsOpen(false)} className="block">
            Become an Artist
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="block mt-2">
            <button className="w-full bg-purple-600 text-white py-2 px-5 rounded-lg">
              Login / Sign Up
            </button>
          </Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block mt-2">
            <button className="w-full bg-purple-600 text-white py-2 px-9 rounded-lg">
              Dashboard
            </button>
          </Link>
        </div>
      )}
     </header>
    </div>
  )
}

export default Header
