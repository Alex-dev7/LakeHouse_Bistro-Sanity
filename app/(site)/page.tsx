"use client"

import { getEvent } from '@/sanity/sanity-utils'
import Header from './components/Header'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'



export default async function Home() {
  
  
  const events  = await getEvent()

  return ( <>

    <Header />

    <main className="my-[50px] bg-white z-10 py-8">
    <Link href={"/menu"} className='border border-black flex gap-3 w-fit sm:self-center py-2 px-6 rounded-md sm:my-4 md:my-8 shadow-md active:shadow-none hover:-translate-y-2 transition-all'>
    See our menu <span>&#9832;</span>
    </Link>
      { events ? <h2 className='text-red-400 text-center text-4xl font-bold my-8'>Events</h2> : ""}
      { events.map((event, i) => (
        <div
        key={i} 
        className='grid sm:grid-cols-1 md:grid-cols-2 justify-between w-10/12 my-4 mx-auto bg-amber-200 p-4 shadow-md'
        >
          <div className='flex flex-col content-center p-4'>
            <h3 className='text-center m-2 text-2xl font-bold underline text-red-500'>{event.title}</h3>
            <PortableText value={event.content} />
          </div>
          <Image src={event.image} alt={event.title}  width={500} height={300} className='object-cover h-[300px]  mx-auto  border-[8px] border-white rounded-md'/>
        </div>
      ))}
    </main>
    </>
  )
}
