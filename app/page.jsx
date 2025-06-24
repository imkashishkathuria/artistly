import Header from '@/components/header'
import { ArrowBigLeftIcon, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* Header  */}
      <Header />

      {/* Hero section  */}
      <section className='bg-white w-full py-12 px-4 md:px-10'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className="w-full md:w-2/2">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text animate-gradient-move">
              Discover & Book Local <span className="text-purple-600 drop-shadow-md">Artists</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 animate-fade-in delay-100">
              Singers, DJs, Dancers, and more — all in one place. Explore your city’s finest talents with a single click.
            </p>
            <p className="text-base md:text-xl text-gray-600 mb-4 animate-fade-in delay-100">
              ArtistLy connects you to a vibrant community of talented performers — from soulful singers to energetic dancers, motivational speakers, and party-starting DJs.
            </p>
            <p className="text-base md:text-xl text-gray-600 mb-6 animate-fade-in delay-150">
              Whether you're planning a wedding, hosting a corporate event, or organizing a local gathering, finding the perfect talent has never been easier. Explore profiles, compare options, and reach out to artists directly for quotes — all in one seamless experience.
            </p>
            <Link href="/artists">
              <button className="bg-purple-600 hover:bg-purple-700 font-bold text-lg text-white md:text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in delay-200">
                Explore Artists
              </button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-center animate-fade-in delay-150">
            <img
              src="/image.png"
              alt="Hero"
              className="w-full h-[550px] max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="px-4 md:px-10 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 animate-fade-in transition duration-300">
            Browse by Category
          </h2>
          <div className="mt-2 w-20 h-1 bg-sky-500 mx-auto rounded-full animate-slide-in" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {[
            { title: "Actors", emoji: "🎭" },
            { title: "Singers", emoji: "🎤" },
            { title: "Dancers", emoji: "💃" },
            { title: "Speakers", emoji: "🎙️" },
            { title: "DJs", emoji: "🎧" },
          ].map((cat) => (
            <div
              key={cat.title}
              className="bg-purple-50 hover:bg-purple-100 text-center py-8 px-4 rounded-xl shadow-sm transition cursor-pointer"
            >
              <div className="text-6xl mb-2">{cat.emoji}</div>
              <div className="text-2xl font-semibold text-purple-800">{cat.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 md:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 animate-fade-in transition duration-300">
            How It Works
          </h3>
          <div className="mt-2 w-20 h-1 bg-sky-500 mx-auto rounded-full animate-slide-in mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "⭐ Browse Artists",
                desc: "Explore profiles across music, dance, hosting, and more.",
              },
              {
                title: "⭐ Request a Quote",
                desc: "Reach out directly to artists that fit your event.",
              },
              {
                title: "⭐ Book & Celebrate",
                desc: "Confirm availability and bring your event to life!",
              },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h4 className="text-2xl font-semibold text-purple-700 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 animate-fade-in transition duration-300 ">
            What Our Users Say
          </h3>
          <div className="mt-2 w-20 h-1 bg-sky-500 mx-auto rounded-full animate-slide-in mb-10" />
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Left Arrow */}
            <div className="md:pt-6">
              <ArrowLeftCircle size={50} color="grey" className="cursor-pointer" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[

                {
                  name: "Priya M.",
                  feedback: "I booked a DJ and a singer for my wedding. The experience was smooth and professional!",
                },
                {
                  name: "Amit R.",
                  feedback: "As a dancer, ArtistLy helped me land gigs with great organizers.",
                },
              ].map((testi, i) => (
                <div key={i} className="p-6 border border-purple-100 rounded-xl shadow-sm">
                  <p className="text-gray-700 italic mb-2">“{testi.feedback}”</p>
                  <div className="text-sm font-semibold text-purple-700">— {testi.name}</div>
                </div>

              ))}
            </div>
            <div className="md:pt-6">
              <ArrowRightCircle size={50} color="grey" className="cursor-pointer" />
            </div>
          </div>
          </div>
      </section>


      {/* Call to Action */}
      <section className="relative bg-purple-600 text-white py-16 px-6 md:px-12 overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-repeat pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Are You a Performer, Speaker, or an Artist?
          </h3>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join a growing community of talented individuals. Create your profile, showcase your work, and connect with event organizers across the country.
          </p>

          <Link href="/onboard">
            <button className="bg-white text-purple-700 text-lg px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} ArtistLy. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default Home
