
import { getContactInfo } from "@/sanity/sanity-utils"


async function Footer() {

    const hours  = await getContactInfo()
    console.log(hours)
  return (
    
    <footer className="w-full grid grid-cols-3 gap-4 bg-[#212529] text-white p-4">
        <div >
            <h4>CONTACT US</h4>
        </div>
        <div>
        <h4>OPENING TIMES</h4>
        {hours?.map((hour, i) => (
            
            <div key={i} className="flex gap-2 justify-between text-gray-500">
               <p>{hour.day}</p>
               <div className="space-x-3">
                   <span>{hour.open}</span>
                    <span>{hour.close}</span>                
                </div> 

            </div>
        ))}
        </div>
        <div>
            <p>map</p>
        </div>

    </footer>
   
  )
}

export default Footer