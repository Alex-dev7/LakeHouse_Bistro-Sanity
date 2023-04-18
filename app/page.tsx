import { getRestaurantInfo } from '@/sanity/sanity-utils'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const info = await getRestaurantInfo()
  console.log(info[0])

  return (
    <main className="">
      
      <h1 className='text-gray-900 text-lg'>{info[0].email}</h1>
    </main>
  )
}
