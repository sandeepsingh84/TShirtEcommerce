// import '@/Home/Home.css'
import { Inter } from 'next/font/google'
import Homepages from '@/Home/Homepages'
import Service from './service/Service'
import About from './About'
import Navbar from './Navbar/Navbar'
import ShirtCart from '@/Components/ShirtCart'
import Swipercode from '@/Components/Swipercode'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homepages />
      <Service/>
        <About/>
        <ShirtCart/>
        <Swipercode/>
  
    </main>
  );
}
