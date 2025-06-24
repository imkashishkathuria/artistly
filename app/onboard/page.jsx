'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import Header from '@/components/header'


const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  categories: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.string().required('Fee is required'),
  location: yup.string().required('Location is required'),
  image: yup.mixed().required('Image is required')
})

const onboard = () => {

  const [preview, setPreview] = useState(null)

  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
      languages: []
    }
  })

  const onSubmit = (data) => {

    const file = data.image;

    if (!file || !(file instanceof Blob)) {
      toast.error("Invalid or missing image file");
      return;
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const newArtist = {
        id: Date.now(),
        name: data.name,
        category: data.categories[0],
        priceRange: data.fee,
        location: data.location,
        image: reader.result
      }
      const existing = JSON.parse(localStorage.getItem('artists')) || []
      localStorage.setItem('artists', JSON.stringify([...existing, newArtist]))
      toast.success('Artist submitted successfully!')
      router.push('/artists')
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10 ">

        <h1 className="text-center text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 animate-fade-in transition duration-300">Join as an Artist</h1>
        <div className="mt-2 w-25 h-1 bg-sky-500 mx-auto rounded-full animate-slide-in  mb-10 " />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-12 text-black text-xl bg-gray-100">
          <div>
            <label className="block mb-1 font-semibold text-2xl">Name:</label>
            <input {...register('name')} className="w-full border px-3 py-2 rounded" />
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-2xl">Bio:</label>
            <textarea {...register('bio')} className="w-full border px-3 py-2 rounded" rows={5} cols={10} />
            <p className="text-red-500 text-sm mt-1">{errors.bio?.message}</p>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-2xl">Categories:</label>
            <div className="flex flex-wrap gap-4">
              {["Singer", "Dancer", "DJ", "Speaker", "Actor"].map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-md">
                  <input
                    type="checkbox"
                    value={cat}
                    {...register('categories')}
                  />
                  {cat}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm mt-1">{errors.categories?.message}</p>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-2xl">Languages Spoken:</label>
            <div className="flex flex-wrap gap-4">
              {["English", "Hindi", "Telugu", "Tamil", "Kannada"].map((lang) => (
                <label key={lang} className="flex items-center gap-2">
                  <input type="checkbox" value={lang} {...register('languages')} />
                  {lang}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm mt-1">{errors.languages?.message}</p>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-2xl">Fee Range:</label>
            <select {...register('fee')} className="w-full border px-3 py-2 rounded">
              <option value="">Select fee</option>
              <option value="₹5k–₹10k">₹5k–₹10k</option>
              <option value="₹10k–₹20k">₹10k–₹20k</option>
              <option value="₹20k+">₹20k+</option>
            </select>
            <p className="text-red-500 text-sm mt-1">{errors.fee?.message}</p>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-2xl">Location:</label>
            <input {...register('location')} className="w-full border px-3 py-2 rounded" />
            <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-2xl">Profile Image:</label>

            <div className="relative">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                {...register('image')}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue('image', file);
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
              <label
                htmlFor="imageUpload"
                className="inline-block bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded cursor-pointer transition"
              >
                Choose Image
              </label>

              {/* Show file name */}
              {watch('image')?.[0] && (
                <span className="ml-4 text-gray-700">{watch('image')[0].name}</span>
              )}
            </div>

            {/* Image Preview */}
            {preview && (
              <div className="mt-3">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded border"
                />
              </div>
            )}

            <p className="text-red-500 text-sm mt-1">{errors.image?.message}</p>
          </div>

          <button
            type="submit"
            className="bg-purple-600 items-center text-white w-[100%] rounded hover:bg-purple-700 p-[30px] text-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default onboard
