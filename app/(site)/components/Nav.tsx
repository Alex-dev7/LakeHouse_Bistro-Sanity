
import { getRestaurantInfo } from "@/sanity/sanity-utils"
import Link from "next/link"
import { CiFacebook, CiInstagram } from "react-icons/ci"
import { TbBrandTiktok } from "react-icons/tb"

async function Nav() {

  const [restaurantInfo] = await getRestaurantInfo()


  return (
    <div className="w-full flex flex-col">
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
     
        <nav className="flex justify-center gap-2  text-md antialiased tracking-wide bg-blue-100 bg-opacity-20 ">
          <Link href="/" as={'/'} className="link p-4 hover:text-amber-400 ">
                HOME  
          </Link>  
          <Link href="/about" as={'/about'} className="link  p-4 hover:text-amber-600">
                ABOUT
          </Link>
          <Link href="/menu" as={'/menu'} className="link hover:text-amber-400 p-4">
                MENU  
          </Link>
          <Link href="/gallery" as={'/gallery'} className="link hover:text-amber-400 p-4">
                GALLERY  
          </Link>
          <Link href="/career" as={'/career'} className="link hover:text-amber-400 p-4">
               WORK HERE
          </Link>   
          <a href="#contact"  className="link hover:text-amber-400 p-4">
                CONTACT
          </a> 
        </nav>
    </div>
  )
}

export default Nav