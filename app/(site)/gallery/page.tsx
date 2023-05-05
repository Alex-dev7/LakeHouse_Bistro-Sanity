"use client"

import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight  } from "react-icons/bs"
import { getGallery } from '@/sanity/sanity-utils'
import BigImage from './component/BigImage'
import  { Suspense, useEffect, useState } from 'react'
// import Loading from './component/loading'
 const photo = "https://cdn.sanity.io/images/yq1bqh12/production/c8e80dfd7211163f467f822c105ed93fa42d2147-1536x2048.jpg"

async function Gallery() {
  // const [images, setImages] = useState([])
  const [popup, setPopup] = useState(true)
   const [popupImage, setPopupImage] = useState( photo )
   const [index, setIndex] = useState(0)
   const gallery = await getGallery()
 
 


   function handleClick(i: number) {
    // setPopupImage(img);
    // setPopup(true);
    setIndex(i)
    console.log('clicked')
  }


   function closePopup(){
     setPopup(false)
   }
    // const [images, setImages] = useState<object[]>(gallery)
    //  const [banner, setBanner] = useState('')
     
    // useEffect(() => {
       
    //     setImages(gallery)
    //     setBanner(gallery[0].image)
    
    
    // }, [])
      
    
// https://cdn.sanity.io/images/yq1bqh12/production/c8e80dfd7211163f467f822c105ed93fa42d2147-1536x2048.jpg

  

    const slideLeft = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft - 300 : null
    }

    const slideRight = () => {
      const slider =  document.getElementById('slider')
      slider ? slider.scrollLeft = slider.scrollLeft + 300 : null
    }
    
  return (<>

  {/* {popup && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-75">
          <Image
            src={popupImage}
            alt=""
            width={220}
            height={300}
            fill
            className=''
            onClick={closePopup}
          />
        </div>
      )} */}
  <div className='py-8 z-50 min-h-screen flex flex-col '>
      {/* <Suspense fallback={<Loading/>} > */}
    
          {/* @ts-expect-error Async Server Component */}
       <BigImage i={gallery[index].image}  />
  {/* </Suspense> */}


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
                    
                    className='w-auto max-h-[250px] brightness-75 rounded-lg shadow-gray-400 shadow-md hover:-translate-y-2 hover:brightness-100 transition-all'
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