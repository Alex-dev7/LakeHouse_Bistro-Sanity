import { getMenu } from "@/sanity/sanity-utils"


async function Menu() {

    const menu = await getMenu()
    // console.log(menu)

  return (
    <div className="menu h-[100vh] md:h-auto flex flex-wrap gap-2 align-middle  justify-center content-center">
        {menu.map((item, i) => (
            <a href={item.file} target="_blank" key={i}
            className="w-[300px] h-[110px] text-xl border border-slate-400 self-center flex justify-center shadow-lg bg-slate-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
                <h4 className="text-lg md:text-xl w-fit h-fit self-center ">{item.title}</h4>
            </a>            
        ))

        }
    </div>
  )
}

export default Menu