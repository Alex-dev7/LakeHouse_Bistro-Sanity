import { getGallery } from '@/sanity/sanity-utils'
import Image from 'next/image'
import React from 'react'

async function Gallery() {

    const gallery = await getGallery()
    
  return (
    <div  className='grid grid-cols-1 gap-8 my-8 p-4  xl:my-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
        {gallery?.map((img, i) => (
            <div key={i}
            className='w-full my-4 h-64 '
            >
                <Image 
                src={img.image}
                alt={img.caption}
                width="300"
                height="320"
                className='w-full h-64 object-cover brightness-75 rounded-lg shadow-gray-400 shadow-md hover:-translate-y-2 hover:brightness-100 transition-all'
                />
                <p className='italic font-thin w-fit px-4 mt-4 bg-gray-200 rounded-lg '>
                    {img.caption}</p>
            </div>
        ))}
    </div>
  )
}

export default Gallery