"use client"
import { getRestaurantInfo } from "@/sanity/sanity-utils"
import Link from "next/link"
import { CiFacebook, CiInstagram } from "react-icons/ci"
import { TbBrandTiktok } from "react-icons/tb"
import { usePathname } from 'next/navigation'


async function Nav() {

  const pathname = usePathname();
  const [restaurantInfo] = await getRestaurantInfo()

  function handleClick(e: any){
 
  }


  return (
    <div className="w-full flex flex-col ">
        <div className="flex justify-between py-5 border-b border-black   px-4">
            <div className="flex gap-3 text-lg self-center w-[202px]">
                <a href={restaurantInfo.facebook} target="_blank">
                    <CiFacebook/>
                </a>
                <a href={restaurantInfo.instagram} target="_blank">
                    <CiInstagram/>
                </a>
                <a href={restaurantInfo.tiktok} target="_blank">
                    <TbBrandTiktok/>
                </a>                
            </div>
            
            <Link href="/" as={'/'} className="text-2xl font-bold ">Lake House Bistro</Link>
            <span className="text-md text-gray-400 self-center w-[202px] text-right">Lake George, NY</span>
        </div>
     
        <nav className="flex justify-center gap-2 text-md antialiased tracking-wide bg-blue-100 bg-opacity-20 ">
          <Link href="/" as={'/'} className={`${pathname === "/" ? "bg-amber-100 text-amber-700 font-bold" : ""} link p-4 hover:text-amber-400 mx-2`} >
                HOME  
          </Link>  
          <Link href="/about" as={'/about'} className={`${pathname === "/about" ? "bg-amber-100 text-amber-700 font-bold" : ""} link  p-4 hover:text-amber-600 mx-2`}>
                ABOUT
          </Link>
          <Link href="/menu" as={'/menu'} className={`${pathname === "/menu" ? "bg-amber-100 text-amber-700 font-bold" : ""} link hover:text-amber-400 p-4 mx-2`}>
                MENU  
          </Link>
          <Link href="/gallery" as={'/gallery'} className={`${pathname === "/gallery" ? "bg-amber-100 text-amber-700 font-bold" : ""} link hover:text-amber-400 p-4 mx-2`}>
                GALLERY  
          </Link>
          <Link href="/career" as={'/career'} className={` ${pathname === "/career" ? "bg-amber-100 text-amber-700 font-bold" : ""} link hover:text-amber-400 p-4 mx-2`}>
               WORK HERE
          </Link>   
          <a href="#contact"   className="link hover:text-amber-400 p-4 active:text-red-400 mx-2" onClick={handleClick}>
                CONTACT
          </a> 
        </nav>
    </div>
  )
}

export default Nav