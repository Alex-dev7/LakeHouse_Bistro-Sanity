

export const metadata = {
  title: 'GALLERY',
  description: 'Lake House Bistro Gallery Page',
}


  
  export default function GalleryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="gallery md:min-h-[700px] lg:min-h-[800px]  ">
          
            {children}
           
        </section>
    )
  }
  