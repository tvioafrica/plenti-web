"use client"
import Banner from "./_components/Banner"
import Footer from "./_components/Footer"
import Navbar from "./_components/Navbar"
import './globals.css'
import { ReactNode, Suspense, useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({children}) => {
  useEffect(() => { 
    AOS.init({
      duration: 800,
          once: false,
    });
  }, [])
  return (
    <html lang="en">
      <body className="body ">
        <Navbar/>
        <main className='pt-20'>
          <Suspense>
        {children}
        </Suspense>
        </main>
        <section className='hidden md:block md:pt-8'>
        <Banner/>
        </section>
      <Footer/>
      </body>
    </html>
  )
}

export default RootLayout;