// import '@/Home/Home.css'
import { Inter } from 'next/font/google'
import Homepages from '@/Home/Homepages'
import Service from './service/Service'
import About from './About'
import Features from './Features'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
  
    <main>
      
       <Homepages/>
        <Service/>
        <About/>
        <Features/>
    </main>
   
     
    
  )
}
