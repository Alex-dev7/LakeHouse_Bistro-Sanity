
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
            
            <h2 className="text-2xl font-bold ">Lake House Bistro</h2>
            <span className="text-md text-gray-400 self-center w-[202px] text-right">Lake George, NY</span>
        </div>
     
        <nav className="flex justify-center gap-5 py-5 border text-md peer-hover:underline">
          <Link href="#" className="link">
                ABOUT
          </Link>
          <Link href="#" className="link">
                EVENTS  
          </Link>  
          <Link href="#" className="link">
                MENU  
          </Link>
          <Link href="#" className="link">
                GALLERY  
          </Link>
          <Link href="#" className="link">
               WORK HERE
          </Link>   
          <Link href="#" className="link">
                CONTACT
          </Link> 
        </nav>
    </div>
  )
}

export default Nav