'use client'


import Link from "next/link"
import { CiFacebook, CiInstagram } from "react-icons/ci"
import { getRestaurantInfo } from "@/sanity/sanity-utils"
import { usePathname } from 'next/navigation'
import { useEffect, useState} from "react"




function Nav() {

const [toggle, setToggle] = useState(false)
const [info, setInfo] = useState({})
const pathname = usePathname()



function handleClick(){
 setToggle(!toggle)
}


useEffect(() => {
    const data = async () => {
      const [restaurantInfo] = await getRestaurantInfo()
       return  setInfo( () => restaurantInfo)
      
    }
    data()
}, []);

  return (
    <div id="div"  className="w-full flex flex-col ">
        <div className="flex  bg-transparent flex-row z-50 justify-between py-2 border-b-[0.5px] border-black relative  px-4">
           <div className="hidden md:flex gap-5 text-lg self-center w-[202px] ">
            {/* @ts-expect-error Async Server Component */}
              <a href={info?.facebook} target="_blank">
                  <CiFacebook className="text-2xl hover:text-amber-600"/>
              </a>
              {/* @ts-expect-error Async Server Component */}
              <a href={info?.instagram} target="_blank" >
                  <CiInstagram className="text-2xl hover:text-amber-600"/>
              </a>           
            </div>

            <Link href="/" as={'/'} className="text-xl py-2 font-medium md:text-2xl md:font-bold ">Lake House Bistro</Link>
            <div className="md:hidden" >
			        <button onClick={() => handleClick()} className=" flex  items-center text-gray-600 p-3">
                  <svg className="block h-6 w-6 fill-current " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    { !toggle ? <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path> :
                     <path d="M0 0 L20 20 M0 20 L20 0" stroke="white" strokeWidth="2" />}
                  </svg>
			        </button>
		        </div>
            <span className="text-sm hidden md:flex text-gray-400 self-center w-[202px] text-right">325 Canada St, Lake George, NY </span>
        </div>
     
        <nav onClick={() => setToggle(false)}  className={` ${toggle ? "static -top-10 overscroll-contain  justify-center text-center text-white z-20 bg-slate-800 bg-opacity-95 w-full h-[110%] " : "absolute text-center w-full h-full -top-[100%]   z-20"} transition-all duration-300 ease-in-out z-0 flex flex-col absolute md:relative md:flex  md:flex-row  md:visible justify-center  gap-2 text-md antialiased tracking-wide bg-opacity-20 my-1 `}>
          <Link href="/" className={`${pathname === "/" ? "bg-amber-100 text-amber-700 font-bold" : ""} link px-4 py-3 hover:text-amber-400 mx-2`} >
                HOME  
          </Link>  
          <Link href="/about" as={'/about'} className={`${pathname === "/about" ? "bg-amber-100  text-amber-700 font-bold" : ""} link  px-4 py-3 hover:text-amber-600 mx-2`}>
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