import { CiFacebook, CiInstagram } from "react-icons/ci"
import { TbBrandTiktok } from "react-icons/tb"
import { getRestaurantInfo } from "@/sanity/sanity-utils"

async function SocialLinks() {


  const [restaurantInfo] = await getRestaurantInfo()

  return (
    <div className="hidden md:flex gap-5 text-lg self-center w-[202px]">
    <a href={restaurantInfo.facebook} target="_blank">
        <CiFacebook className="text-2xl hover:text-amber-600"/>
    </a>
    <a href={restaurantInfo.instagram} target="_blank" >
        <CiInstagram className="text-2xl hover:text-amber-600"/>
    </a>
    <a href={restaurantInfo.tiktok} target="_blank">
        <TbBrandTiktok className="text-2xl hover:text-amber-600"/>
    </a>                
</div>
  )
}

export default SocialLinks