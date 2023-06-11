"use client"

import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight  } from "react-icons/bs"
import { getGallery } from '@/sanity/sanity-utils'
import BigImage from './component/BigImage'
import  { useState } from 'react'


async function Gallery() {

  //index for the big image
   const [index, setIndex] = useState(0)
   const gallery = await getGallery()
 

   function handleClick(i: number) {
    setIndex(i)
  }


    const slideLeft = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft - 440 : null
    }

    const slideRight = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft + 440 : null
    }
    
  return (
  <>
  <div className='gallery py-8 z-50  flex flex-col border-[0.5px] border-yellow-500'>
     
    
      <BigImage i={gallery[index].image}  />
 
      <div  className='relative flex items-center align-top'>
        <BsChevronCompactLeft
        className='h-[220px] hover:bg-gray-300 rounded-md mx-2'
        onClick={slideLeft} size={40} />
        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-4 scrollbar-hide'>
            {gallery?.map((img, i) => (
                <div key={i}
                className='w-fit  p-2 cursor-pointer  inline-block '
                onClick={() => { handleClick(i)}}
                >
                    <Image 
                    src={img.image}
                    alt={img.caption || "Lake House Bistro"}
                    width={220}
                    height={250}
                    quality={5} 
                    className='w-auto max-h-[200px] brightness-75 rounded-lg shadow-gray-400 shadow-md hover:-translate-y-2 hover:brightness-100 transition-all'
                    />

                </div>
            ))}        
        </div>
              <BsChevronCompactRight
              className='h-[220px] hover:bg-gray-300 rounded-md mx-2'
              onClick={slideRight} size={40} />
      </div>
    </div>
  </>   


  )
}

export default Gallery
