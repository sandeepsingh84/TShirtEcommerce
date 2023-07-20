// import '@/Home/Home.css'
import { Inter } from 'next/font/google'
import Homepages from '@/Home/Homepages'
import Service from './service/Service'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
  
    <main>
      
       <Homepages/>
        <Service/>
    </main>
   
     
    
  )
}
