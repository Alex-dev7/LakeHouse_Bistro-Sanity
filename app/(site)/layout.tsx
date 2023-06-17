

import Nav from './components/Nav'
import '../globals.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Lake House Bistro',
  description: 'Restaurant in Lake George',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  >
      <body className='bg-gray-50'>
        <div className="bg-white md:max-w-screen-2xl  mx-auto  box-border shadow-2xl shadow-gray-400  ">
        <Nav />
        <div className=' min-h-fit '>
          {children}
        </div> 
          <Footer/>
        </div>        
      </body>

    </html>
  )
}
