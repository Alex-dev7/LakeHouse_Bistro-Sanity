import Nav from './components/Nav'
import '../globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      
      <body className="max-w-screen-2xl mx-auto">
      <Nav />
      <div>
        {children}
      </div> 
        <Footer />
      </body>
    </html>
  )
}
