"use client"

import Image from "next/image"

async function BigImage({i}: any) {

  return (
    <div className="h-fit w-fit shadow-lg border-4 border-white mx-auto rounded-md">
        <Image src={i} alt='Lake House Bistro' width={400} height={600} 
              className='mx-auto rounded-md w-auto h-[600px] ' />  
    </div>
  )
}

export default BigImage