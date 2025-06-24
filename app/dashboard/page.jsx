'use client'

import Header from '@/components/header'
import React, { useEffect, useState } from 'react'

const dashboard = () => {

  const [artists, setArtists] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('artists')) || []
    setArtists(stored)
  }, [])

  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-center text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 animate-fade-in transition duration-300">
          Artist Submissions
        </h1>
        <div className="mt-2 w-25 h-1 bg-sky-500 mx-auto rounded-full animate-slide-in  mb-10 " />
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-purple-100">
              <tr className="text-left text-sm text-gray-700">
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Image</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">City</th>
                <th className="px-6 py-4 font-semibold">Fee</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
               <tbody>
              {artists.length > 0 ? (
                artists.map((artist, index) => (
                  <tr
                    key={artist.id || index}
                    className="border-t hover:bg-gray-50 transition-all"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {artist.name}
                    </td>
                    <td className="px-6 py-4">
                      <img src={artist.image} width="50px" height="30px" />
                      
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {Array.isArray(artist.categories)
                        ? artist.categories.join(', ')
                        : artist.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {artist.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {artist.priceRange}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-purple-600 hover:text-purple-800 font-semibold transition">
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center text-gray-500 py-10 text-sm"
                  >
                    No artist submissions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default dashboard
