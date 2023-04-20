import { getRestaurantInfo } from '@/sanity/sanity-utils'
import Header from './components/Header'

export default async function Home() {

  // const [ info  ] = await getRestaurantInfo()


  // console.log(info)

  return ( <>
    <Header />
    <main className="">
      
      <h1 className='text-gray-900 text-lg'>home page</h1>
    </main>
    </>
  )
}
