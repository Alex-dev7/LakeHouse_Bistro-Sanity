
import Link from "next/link"
import { CiFacebook, CiInstagram } from "react-icons/ci"
import { TbBrandTiktok } from "react-icons/tb"

function Nav() {
  return (
    <div className="w-full flex flex-col">
        <div className="flex justify-between py-5 mx-5 border-b border-black">
            <div className="flex gap-3 text-lg self-center w-[202px]">
                <a href="#">
                    <CiFacebook/>
                </a>
                <a href="#">
                    <CiInstagram/>
                </a>
                <a href="#">
                    <TbBrandTiktok/>
                </a>                
            </div>
            
            <Link href="/" className="text-2xl font-bold ">Lake House Bistro</Link>
            <span className="text-md text-gray-400 self-center w-[202px] text-right">Lake George, NY</span>
        </div>
     
        <nav className="flex justify-center gap-6 py-5 text-md antialiased tracking-wide">
          <Link href="/about" className="link hover:text-gray-400 ">
                ABOUT
          </Link>
          <Link href="#" className="link hover:text-gray-400">
                EVENTS  
          </Link>  
          <Link href="#" className="link hover:text-gray-400">
                MENU  
          </Link>
          <Link href="/gallery" className="link hover:text-gray-400">
                GALLERY  
          </Link>
          <Link href="#" className="link hover:text-gray-400">
               WORK HERE
          </Link>   
          <Link href="#contact" className="link hover:text-gray-400">
                CONTACT
          </Link> 
        </nav>
    </div>
  )
}

export default Nav