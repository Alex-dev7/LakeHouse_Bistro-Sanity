import { getMenu } from "@/sanity/sanity-utils"


async function Menu() {

    const menu = await getMenu()
    // console.log(menu)

  return (
    <div className="menu flex gap-2 align-middle  justify-center content-center">
        {menu.map((item, i) => (
            <a href={item.file} target="_blank" key={i}
            className="w-[300px] h-[300px] text-xl border self-center flex justify-center bg-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
                <h4 className="w-fit h-fit self-center  ">{item.title}</h4>
            </a>            
        ))

        }
    </div>
  )
}

export default Menu