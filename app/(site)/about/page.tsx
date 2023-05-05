
import { getAbout } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"


async function About() {

    const [ about ] = await getAbout()

  return (
    <section className="about w-full md:p-20">
        <div className="grid grid-cols-2  ">
            <h3 className="col-span-2 font-bold text-orange-500 text-center text-3xl my-8">{about.title}</h3>
            <div className="text-lg line-height-4 text-gray-600 text-justify">
                <PortableText value={about.content} /> 
            </div>
               
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
            className="w-[400px] h-[400px] object-cover border-8 border-white m-auto"  
            src={about.image} width={400} height={400} alt="cook image" />
        </div>
    </section>
  )
}

export default About