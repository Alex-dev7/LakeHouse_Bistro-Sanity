'use client'


import Link from "next/link"
import { CiFacebook, CiInstagram } from "react-icons/ci"
import { TbBrandTiktok } from "react-icons/tb"
import { getRestaurantInfo } from "@/sanity/sanity-utils"
import { usePathname } from 'next/navigation'
import React , { useEffect, useState, useRef} from "react"
// import SocialLinks from "./SocialLinks"



function Nav() {

const [toggle, setToggle] = useState(false)
const [info, setInfo] = useState({})
const pathname = usePathname();




function handleClick(){
  
 setToggle(!toggle)
  
console.log(toggle)

}

// const arr = []



  useEffect(() => {
    const data = async () => {
      const [...restaurantInfo] = await getRestaurantInfo()
      setInfo({...restaurantInfo[0]})
      console.log(info)
    }
    data()
   
  }, []);

  return (
    <div id="div" className="w-full  flex flex-col ">
        <div className="flex flex-row  justify-between py-5 border-b border-black   px-4">

           <div className="hidden md:flex gap-5 text-lg self-center w-[202px]">
              <a href={info?.facebook} target="_blank">
                  <CiFacebook className="text-2xl hover:text-amber-600"/>
              </a>
              <a href={info?.instagram} target="_blank" >
                  <CiInstagram className="text-2xl hover:text-amber-600"/>
              </a>
              <a href={info?.tiktok} target="_blank">
                  <TbBrandTiktok className="text-2xl hover:text-amber-600"/>
              </a>                
            </div>

            
            <Link href="/" as={'/'} className="text-xl  md:text-2xl font-bold ">Lake House Bistro</Link>
            <div className="md:hidden" >
			        <button onClick={() => handleClick()} className=" flex items-center text-gray-600 p-3">
                  <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
			      </button>
		      </div>
            <span className="text-sm hidden md:flex text-gray-400 self-center w-[202px] text-right">325 Canada St, Lake George, NY </span>
        </div>
     
        <nav  className={` ${toggle ? "hidden" : "flex"}  transition-all flex-col md:flex-row  md:visible justify-center  gap-2 text-md antialiased tracking-wide bg-opacity-20 my-1`}>
          <Link href="/" as={'/'} className={`${pathname === "/" ? "bg-amber-100 text-amber-700 font-bold" : ""} link px-4 py-3 hover:text-amber-400 mx-2`} >
                HOME  
          </Link>  
          <Link href="/about" as={'/about'} className={`${pathname === "/about" ? "bg-amber-100 text-amber-700 font-bold" : ""} link  px-4 py-3 hover:text-amber-600 mx-2`}>
                ABOUT
          </Link>
          <Link href="/menu" as={'/menu'} className={`${pathname === "/menu" ? "bg-amber-100 text-amber-700 font-bold" : ""} link hover:text-amber-400 px-4 py-3 mx-2`}>
                MENU  
          </Link>
          <Link href="/gallery" as={'/gallery'} className={`${pathname === "/gallery" ? "bg-amber-100 text-amber-700 font-bold" : ""} link hover:text-amber-400 px-4 py-3 mx-2`}>
                GALLERY  
          </Link>
          <Link href="/career" as={'/career'} className={` ${pathname === "/career" ? "bg-amber-100 text-amber-700 font-bold" : ""} link hover:text-amber-400 px-4 py-3 mx-2`}>
               WORK HERE
          </Link>   
          <a href="#contact"   className="link hover:text-amber-400 px-4 py-3 active:text-red-400 mx-2">
                CONTACT
          </a> 
        </nav>
    </div>
  )
}

export default Nav