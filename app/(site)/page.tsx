
import { getEvent } from '@/sanity/sanity-utils'
import Header from './components/Header'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

export default async function Home() {

  const events  = await getEvent()

  return ( <>
    <Header />
    <main className="">
      <h2 className='text-gray-900 text-center my-5 text-4xl'>Events</h2>
      { events.map((event, i) => (
        <div key={i} 
        className='flex justify-between w-8/12 my-4 mx-auto bg-yellow-100 p-4'
        >
          <div>
            <h3 className='text-center m-2 text-2xl font-bold underline text-red-500'>{event.title}</h3>
            <PortableText value={event.content} />
          </div>
          <Image src={event.image} alt={event.title}  width={300} height={300} />
        </div>
      ))}
    </main>
    </>
  )
}
