"use client"
import { getGallery } from '@/sanity/sanity-utils'
import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight  } from "react-icons/bs"


async function Gallery() {

    const gallery = await getGallery()


    const slideLeft = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft - 300 : null
    }

    const slideRight = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft + 300 : null
    }
    
  return (
    <div  className='relative flex items-center align-top'>
      <BsChevronCompactLeft
      className='h-[220px] hover:bg-gray-200 rounded-md mx-2'
      onClick={slideLeft} size={40} />
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-4 scrollbar-hide'>
          {gallery?.map((img, i) => (
              <div key={i}
              className='w-fit  p-2 cursor-pointer  inline-block  '
              >
                  <Image 
                  src={img.image}
                  alt={img.caption && ""}
                  width="220"
                  height="220"
                  className='max-h-[220px] min-w-[220px]object-cover brightness-75 rounded-lg shadow-gray-400 shadow-md hover:-translate-y-2 hover:brightness-100 transition-all'
                  />
                  {/* <p className='italic font-thin w-fit px-4 mt-4 bg-gray-200 rounded-lg h'>
                      {img.caption}</p> */}
              </div>
          ))}        
      </div>
            <BsChevronCompactRight
            className='h-[220px] hover:bg-gray-200 rounded-md mx-2'
            onClick={slideRight} size={40} />
    </div>
  )
}

export default Gallery


{/* <div></div> */}