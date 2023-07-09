// "use client"

import { getRestaurantInfo } from "@/sanity/sanity-utils"
import Image from "next/image"
import logo from "/public/Logo.svg"
import background from "/public/bar.jpg"

async function Header() {

const [ info ]= await getRestaurantInfo()

  return (
    <header className="flex flex-col align-middle justify-center relative">
            <Image src={background} alt={"restaurant background"}  width={1920} height={1281} priority className="w-full h-[85vh] object-cover z-0 brightness-50"/>
            <div
            className="z-10 absolute self-center -translate-x-5 ">
              <Image src={logo} alt="logo" width={700} height={800} priority className="logo"/>            
            </div>

            <a        
            href={info.reserve} target="_blank" className="z-10 absolute text-white w-fit mx-auto border-2 border-white px-5 py-2 self-center translate-y-[20vh] rounded-3xl text-lg mt-10 hover:bg-orange-400 hover:opacity-90 transition animate-pulse shadow-orange-300 shadow-lg">
                Book A Table
            </a>           
         
    </header>
  )
}

export default Header