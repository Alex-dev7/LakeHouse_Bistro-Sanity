"use client"

import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight  } from "react-icons/bs"
import { getGallery } from '@/sanity/sanity-utils'
import { Suspense, useEffect } from 'react'
import  { useState } from 'react'
import BigImage from './bigImage'


async function Gallery() {
    
     const [banner, setBanner] = useState<any>(0)

    // useEffect(() => {
    //   setBanner(gallery[0].image)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
      const gallery = await getGallery()
    
// https://cdn.sanity.io/images/yq1bqh12/production/c8e80dfd7211163f467f822c105ed93fa42d2147-1536x2048.jpg

    function handleClick(i: number){
      setBanner(i)
      console.log("here")
    }
  

    const slideLeft = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft - 300 : null
    }

    const slideRight = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft + 300 : null
    }
    
  return (<>
  <Suspense fallback={<div className='bg-orange-100 py-8 h-[500px]'>Loading ...</div>} >
         <BigImage banner={banner}  />
  </Suspense>
  <div className='bg-orange-100 py-8'>

            

      <div  className='relative flex items-center align-top'>
        <BsChevronCompactLeft
        className='h-[220px] hover:bg-gray-200 rounded-md mx-2'
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
                    height={300}
                    
                    className=' brightness-75 rounded-lg shadow-gray-400 shadow-md hover:-translate-y-2 hover:brightness-100 transition-all'
                    />

                </div>
            ))}        
        </div>
              <BsChevronCompactRight
              className='h-[220px] hover:bg-gray-200 rounded-md mx-2'
              onClick={slideRight} size={40} />
      </div>
    </div>
  </>   


  )
}

export default Gallery


                    {/* <p className='italic font-thin w-fit px-4 mt-4 bg-gray-200 rounded-lg h'>
                        {img.caption}</p> */}