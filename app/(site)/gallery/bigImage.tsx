import { getGallery } from "@/sanity/sanity-utils"
import Image from "next/image"


async function BigImage({banner}: any) {
   const gallery = await getGallery()
console.log(banner)

  return (
    <div className="">
        <Image src={gallery[banner].image} alt='Lake House Bistro' width={400} height={600}
              className='mx-auto rounded-md' /> 
    </div>
  )
}

export default BigImage