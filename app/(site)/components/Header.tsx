import Image from "next/image"
import logo from "../../../public/Logo.svg"

function Header() {
  return (
    <header className="flex flex-col align-middle justify-center ">
        
            <Image src={logo} alt="logo" width={700} height={700} className="z-10 -translate-x-10  mx-auto"/> 
            <a href="#" className="z-10 text-white w-fit mx-auto border-2 border-white px-5 py-2 rounded-3xl text-lg mt-10 hover:bg-orange-400 hover:opacity-90 transition">
                Book A Table
            </a>           
         
    </header>
  )
}

export default Header