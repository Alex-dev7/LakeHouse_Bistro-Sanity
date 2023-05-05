
"use client"

import { Suspense } from "react"

  
  export default function GalleryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="gallery min-h-screen md:min-h-[700px] lg:min-h-[800px]  bg-orange-100 ">
          
            {children}
           
        </section>
    )
  }
  