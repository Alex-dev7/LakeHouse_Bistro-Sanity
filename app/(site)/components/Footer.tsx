import { getContactInfo } from "@/sanity/sanity-utils"


async function Footer() {

    const hours  = await getContactInfo()
  return (
    <footer>
        <div >
            <h4>CONTACT US</h4>
        </div>
        <div>
        <h4>OPENING TIMES</h4>
        {hours.map((hour, i) => (
            <div key={i}>
               <p>{hour.weekday}</p> 
               <span>{hour.open}</span> - <span>{hour.close}</span>
            </div>
        ))}
        </div>
        <div>

        </div>

    </footer>
  )
}

export default Footer