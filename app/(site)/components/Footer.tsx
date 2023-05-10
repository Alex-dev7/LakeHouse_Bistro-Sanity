import { Hours } from "@/types/Hours"
import { getOpeningInfo, getRestaurantInfo } from "@/sanity/sanity-utils"
import { GrLocation, GrPhone, GrMail } from "react-icons/gr"


async function Footer() {
    const[ info ] = await getRestaurantInfo()
    const hours  = await getOpeningInfo()
    // map object that maps the specific days of the week to their correct indices
    const map: { [day: string]: number } = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
     }
     // using sort(), rank the object according to their index in map
     hours.sort((a , b) => {
        return map[a.day] - map[b.day]
     })
     
// bg-[#212529]
  return (
    <>
    <footer  className="w-full md:h-[400px] grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-700  text-white py-4 content-center">
        <div id="contact" className="flex flex-col gap-2 sm:mx-auto  md:w-5/6 ">
            <h4 className="my-2">CONTACT US</h4>
           <address className="text-gray-400 flex gap-2 ">
            <GrLocation className="text-xl text-[#616c76] "/>
            {info.address}
            </address>
           <a href={`tel:${info.phone}`} className="flex gap-2 text-gray-300">
            <GrPhone className="text-lg self-center"/>
            {info.phone}
            </a>
           <a href={`mailto:${info.email}`} className="flex gap-2 text-neutral-400">
            <GrMail className="self-center "/>
            {info.email}
            </a>
        </div>
        <div className="sm:mx-auto md:w-4/6 space-y-1">
        <h4 className="my-2">OPENING HOURS</h4>
        {hours?.map((hour, i) => (
            
            <div key={i} className="flex gap-1 justify-between text-gray-400">
               <p>{hour.day}</p>
               <div className="space-x-3">
                   <span>{hour.open}</span>
                    <span>{hour.close}</span>                
                </div> 

            </div>
        ))}
        </div>
        <div className="md:col-span-2 lg:col-auto sm:mx-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.10183399873463!2d-73.71274967889809!3d43.42657038721986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dfc4452d1bb475%3A0xa3c0466e664f3dd7!2sLake%20House%20Bistro!5e0!3m2!1sen!2sus!4v1682192562543!5m2!1sen!2sus" className="w-[400px] h-[200px] " allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </footer>
    <div className="flex justify-between px-4 bg-slate-800 text-slate-300 text-sm p-2">
        <p>Copyright © 2023 Lake House Bistro</p>
        <p>built by <a href="#">Alexei Rusu</a></p>
    </div>
    </>
  )
}

export default Footer



