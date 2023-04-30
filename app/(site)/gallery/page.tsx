"use client"

import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight  } from "react-icons/bs"
import { getGallery } from '@/sanity/sanity-utils'
import { Suspense, useEffect } from 'react'
import  { useState } from 'react'
import Loading from '../about/loading'


async function Gallery() {
    
     const [banner, setBanner] = useState<any>("https://cdn.sanity.io/images/yq1bqh12/production/c8e80dfd7211163f467f822c105ed93fa42d2147-1536x2048.jpg")

    // useEffect(() => {
    //   setBanner(gallery[0].image)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
      const gallery = await getGallery()
    


    function handleClick(image: string){
      setBanner(image)
    }
  

    const slideLeft = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft - 300 : null
    }

    const slideRight = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft + 300 : null
    }
    
  return (
    <>
    <Suspense fallback={<Loading/> }>
                   <img src={banner} alt='clicked image' 
              className='mx-auto rounded-md'
              /> 
    </Suspense>
      

         
 


      <div  className='relative flex items-center align-top'>
        <BsChevronCompactLeft
        className='h-[220px] hover:bg-gray-200 rounded-md mx-2'
        onClick={slideLeft} size={40} />
        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-4 scrollbar-hide'>
            {gallery?.map((img, i) => (
                <div key={i}
                className='w-fit  p-2 cursor-pointer  inline-block '
                
                >
                    <Image 
                    src={img.image}
                    alt={img.caption || "ghjh"}
                    onClick={(e) => {e.preventDefault(), handleClick(img.image)}}
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
    </>
  )
}

export default Gallery


                    {/* <p className='italic font-thin w-fit px-4 mt-4 bg-gray-200 rounded-lg h'>
                        {img.caption}</p> */}