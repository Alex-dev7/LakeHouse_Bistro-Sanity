"use client"

import Image from "next/image"
import logo from "/public/Logo.svg"
import background from "/public/dock.png"

function Header() {
  return (
    <header className="flex flex-col align-middle justify-center relative">
            <Image src={background} alt={""}  width={1920} height={1281} priority className="w-full h-[85vh] object-cover z-0"/>
            <div
            className="z-10 absolute self-center -translate-x-10 ">
              <Image src={logo} alt="logo" width={700} height={800} priority className="logo"/>            
            </div>

            <a        
            href="#" className="z-10 absolute text-white w-fit mx-auto border-2 border-white px-5 py-2 self-center translate-y-[20vh] rounded-3xl text-lg mt-10 hover:bg-orange-400 hover:opacity-90 transition animate-pulse">
                Book A Table
            </a>           
         
    </header>
  )
}

export default Header