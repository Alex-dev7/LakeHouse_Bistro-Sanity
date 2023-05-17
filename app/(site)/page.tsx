
import { getEvent } from '@/sanity/sanity-utils'
import Header from './components/Header'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

export default async function Home() {

  const events  = await getEvent()

  return ( <>
    <Header />

    <main className="my-[50px]">
    <Link href={"/menu"} className='border border-black py-2 px-6 rounded-md my-5 shadow-md active:shadow-sm'>
    see our menu
    </Link>
      { events ? <h2 className='text-red-400 text-center my-5 text-4xl font-bold'>Events</h2> : ""}
      { events.map((event, i) => (
        <div key={i} 
        className='grid grid-cols-2 justify-between w-8/12 my-4 mx-auto bg-amber-300 p-4'
        >
          <div className='flex flex-col content-center p-4'>
            <h3 className='text-center m-2 text-2xl font-bold underline text-red-500'>{event.title}</h3>
            <PortableText value={event.content} />
          </div>
          <Image src={event.image} alt={event.title}  width={500} height={300} className='object-cover h-[300px]    border-[8px] border-white rounded-md'/>
        </div>
      ))}
    </main>
    </>
  )
}
