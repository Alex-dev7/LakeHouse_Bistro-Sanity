import Image from "next/image"
import logo from "../../../public/Logo.svg"

function Header() {
  return (
    <header className="flex align-middle justify-center bg-black ">
        
            <Image src={logo} alt="logo" width={700} height={700} className="z-10 -translate-x-10"/>
     
            
       
    </header>
  )
}

export default Header