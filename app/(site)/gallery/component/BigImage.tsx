"use client"

import Image from "next/image"
import { getGallery } from "@/sanity/sanity-utils"

async function BigImage({src}: any ){

  const gallery = await src


  return (
    <div className="w-fit shadow-lg border-4 border-white mx-auto rounded-md">

        <Image  src={gallery} alt='Lake House Bistro' width={450} height={600} 
              className='mx-auto rounded-md  w-[300px] md:w-[450px]' />         
 
    </div>
  )
}

export default BigImage