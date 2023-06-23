import { getMenu } from "@/sanity/sanity-utils"
import Image from "next/image"

async function Menu() {

    const menu = await getMenu()
    // console.log(menu)

  return (
    <>
      
      <div className="menu h-[80vh]   flex flex-wrap gap-2 align-middle  justify-center content-center relative">
        <span className="absolute top-10 italic text-gray-500">“So long as you have food in your mouth you have solved all questions for the time being.” –Franz Kafka</span>
          {menu.map((item, i) => (
              <a href={item.file} target="_blank" key={i}
              className="w-[300px] h-[110px] md:h-[300px] text-xl  self-center brightness-20 flex justify-center shadow-lg  bg-black hover:shadow-none hover:-translate-y-2 transition-all duration-300"
              >
                  <Image src={item.image} alt="df" width={300} height={400} className="object-cover md:opacity-75 hover:opacity-100 transition-all"/>
                  <h4 className="text-xl md:text-2xl w-[298px] h-fit py-1 text-center self-center absolute text-white font-bold backdrop-blur-sm tracking-wide">{item.title}</h4>
              </a>            
          ))

          }
      </div>    
    </>

  )
}

export default Menu