import { getMenu } from "@/sanity/sanity-utils"
import Image from "next/image"

export const metadata = {
  title: 'MENU',
  description: 'Lake House Bistro Menu',
}

async function Menu() {

    const menu = await getMenu()
    // console.log(menu)

  return (
    <>
      
      <div className="menu h-[80vh] pt-10  flex flex-wrap gap-4 align-middle  justify-center content-center relative">
        <h1 className="absolute top-14 text-2xl mx-4 text-justify">Our Menu.</h1>
        {/* <span className="absolute top-20 italic text-gray-500 mx-4 text-justify">“So long as you have food in your mouth you have solved all questions for the time being.” –Franz Kafka</span> */}
          {menu.map((item, i) => (
              <a href={item.file} target="_blank" key={i} 
              className="max-w-[300px] h-[110px] md:h-[280px] text-xl  self-center brightness-20 flex justify-center shadow-lg  bg-black hover:shadow-none hover:-translate-y-2 transition-all duration-300 border-4 border-white"
              >
                  <Image src={item.image} alt={item.title} width={300} height={400} className="object-cover md:opacity-75 hover:opacity-100 transition-all"/>
                  <h4 className="text-xl md:text-2xl w-[280px] h-[80px] py-6 text-center self-center absolute text-white font-bold backdrop-brightness-50 tracking-wide">{item.title}</h4>
              </a>            
          ))

          }
      </div>    
    </>
  )
}

export default Menu