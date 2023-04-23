import { getGallery } from '@/sanity/sanity-utils'
import Image from 'next/image'
import React from 'react'

async function Gallery() {

    const gallery = await getGallery()
    
  return (
    <div  className='flex flex-wrap gap-4'>
        {gallery?.map((img, i) => (
            <div key={i}>
                <Image 
                src={img.image}
                alt={img.caption}
                width="300"
                height="320"
                />
                <p>{img.caption}</p>
            </div>
        ))}
    </div>
  )
}

export default Gallery