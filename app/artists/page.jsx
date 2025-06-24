"use client";

import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import artistsData from '../data/artists.json'

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker', 'Actor']
const locations = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai']

const artists = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  



  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  // Filter logic
  const filteredArtists = artistsData.filter((artist) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(artist.category)

    const matchLocation =
      !locationFilter ||
      artist.location.toLowerCase().includes(locationFilter.toLowerCase())

    const matchPrice =
      !priceFilter || artist.priceRange === priceFilter

    return matchCategory && matchLocation && matchPrice
  })

  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row md:items-start gap-6 p-4 md:p-10 max-w-7xl mx-auto'>
        {/* Filter sidebar  */}
        <aside className="w-full h-auto text-gray-900 md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-sm not-last:">
          <h3 className="text-3xl font-bold mb-4">
            Filters
          </h3>
          <div className="mb-4">
            <h4 className="font-medium text-2xl mb-2">
              Category
            </h4>
            {categories.map((cat) => (
              <div key={cat} className='flex items-center gap-2 mb-1'>
                <input type='checkbox' checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)} />
                <label className="text-xl">{cat}</label>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h4 className="font-medium text-2xl mb-2">Location</h4>
            <input
              type="text"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-xl"
              placeholder="Enter location"
            />
          </div>

          <div className="mb-2">
            <h4 className="font-medium text-2xl mb-2">Price Range</h4>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-xl"
            >
              <option value="">All</option>
              <option value="₹5k–₹10k">₹5k–₹10k</option>
              <option value="₹10k–₹20k">₹10k–₹20k</option>
              <option value="₹20k+">₹20k+</option>
            </select>
          </div>
        </aside>

        {/* Artist Cards Grid */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <div key={artist.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-48 object-contain rounded mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">{artist.name}</h4>
              <p className="text-sm text-gray-600">{artist.category}</p>
              <p className="text-sm text-gray-600">{artist.location}</p>
              <p className="text-sm text-gray-600 mb-2">{artist.priceRange}</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm">
                Ask for Quote
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default artists
