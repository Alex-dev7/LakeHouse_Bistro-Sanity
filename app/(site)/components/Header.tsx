"use client"

import Image from "next/image"
import logo from "../../../public/Logo.svg"
import background from "/public/dock.png"
import { motion } from "framer-motion"

function Header() {
  return (
    <header className="flex flex-col align-middle justify-center relative">
            <Image src={background} alt={""}  width={1920} height={1281} priority className="w-full h-[85vh] object-cover z-0"/>
            <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -70 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="z-10 absolute self-center -translate-x-10 -translate-y-20 ">
              <Image src={logo} alt="logo" width={700} height={800} priority className=" "/>               
            </motion.div>

            <motion.a
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ ease: "easeOut", delay: 1 , duration: 3 }}           
            href="#" className="z-10 absolute text-white w-fit mx-auto border-2 border-white px-5 py-2 self-center translate-y-[20vh] rounded-3xl text-lg mt-10 hover:bg-orange-400 hover:opacity-90 transition">
                Book A Table
            </motion.a>           
         
    </header>
  )
}

export default Header