
import { getAbout } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"


async function About() {

    const [ about ] = await getAbout()

  return (
    <section className="about h-[85vh] w-full p-6 md:p-20">
        <div className=" flex flex-col md:grid  md:grid-cols-2  gap-4">
            <h3 className="col-span-2 font-bold text-orange-500 text-center text-2xl md:text-4xl my-8">{about.title}</h3>
            <div className="text-md md:text-lg line-height-4 text-gray-600 text-justify">
                <PortableText value={about.content} /> 
            </div>
               
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
            className="w-[600px] h-[450px] md:w-[400px] md:h-[400px] object-cover border-8 border-white m-auto"  
            src={about.image} width={400} height={400} alt="cook image" />
        </div>
    </section>
  )
}

export default About