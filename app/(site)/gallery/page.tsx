"use client"

import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight  } from "react-icons/bs"
import { getGallery } from '@/sanity/sanity-utils'
import BigImage from './component/BigImage'
import  { useState, Suspense } from 'react'
import Loading from './loading'


export const revalidate = 1

async function Gallery() {

  //index for the big image
   const [index, setIndex] = useState(0)
   const gallery = await getGallery()
 
  function handleClick(i: number) {
    
    setIndex(i)
    console.log(i)

  }

    const slideLeft = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft - 240 : null
    }

    const slideRight = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft + 240 : null
    }
    
  return (
  <>
  <div className='h-[100%] py-8 z-50  flex flex-col '>
     <div className="h-[400px] sm:h-[500px] md:h-[600px]">
          <Suspense fallback={<Loading/>}>
            { index !== null && (
               <BigImage src={gallery[index].image} caption={gallery[index].caption} />
            )}
       
      </Suspense>
     </div>

    
 
      <div  className='relative flex items-center align-top mt-4 '>
        <BsChevronCompactLeft
        className='h-[80px] md:h-[150px] bg-gray-300  hover:bg-gray-400 rounded-md mx-2'
        onClick={slideLeft} size={40} />
        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-4 pl-0 scrollbar-hide'>
            {gallery?.map((img, i) => (
                <div key={i}
                className='w-fit  p-2 cursor-pointer  inline-block '
                onClick={() => { handleClick(i)}}
                >
                    <Image 
                    src={img.image}
                    alt={img.caption || "Lake House Bistro"}
                    loading='lazy'
                    width={115}
                    height={150}
                    quality={50} 
                    className='h-[80px] md:h-[150px] w-auto brightness-75 rounded-lg shadow-gray-400 shadow-md hover:-translate-y-2 hover:brightness-100 transition-all'
                    />

                </div>
            ))}        
        </div>
              <BsChevronCompactRight
              className='h-[80px] md:h-[150px] bg-gray-300 hover:bg-gray-400 rounded-md mx-2'
              onClick={slideRight} size={40} />
      </div>
    </div>
  </>   


  )
}

export default Gallery
