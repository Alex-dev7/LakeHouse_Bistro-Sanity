"use client"

import Image from "next/image"


async function BigImage({src, caption}: any ){

  const img = await src


  return (
    <div className="w-fit shadow-lg border-4 border-white mx-auto rounded-md ">

        <Image  src={img} alt='Lake House Bistro' width={450} height={600} 
              className='mx-auto rounded-md  w-[300px] sm:w-[380px] md:w-[450px] relative' /> 
         { caption ?        
        <div className="absolute bg-black opacity-60 text-white px-4 py-2 text-center w-[300px] sm:w-[380px] md:w-[450px] -translate-y-28">
          <p>
            {caption }
          </p>
        </div>      
          : null}
    </div>
  )
}

export default BigImage