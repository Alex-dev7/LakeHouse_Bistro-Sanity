"use client"

import { getGallery } from "@/sanity/sanity-utils"
import Image from "next/image"
import { Suspense, useEffect, useState } from "react"
import Loading from "../loading"

async function BigImage({i}: any) {

  // const gallery = await getGallery()
  //   const [image, setImage] = useState()

  //   useEffect(() => {

  //     return setImage(gallery[i].image)
  //   }, [i])

console.log(i)

  return (
    <div className="h-fit w-fit shadow-lg border-4 border-white mx-auto rounded-md">
            {/* <Suspense fallback={<Loading/>} > */}
    

    <Image src={i} alt='Lake House Bistro' width={400} height={500}
              className='mx-auto rounded-md w-auto h-[600px] ' /> 
{/* </Suspense> */}

     
    </div>
  )
}

export default BigImage