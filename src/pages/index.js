// import '@/Home/Home.css'
import { Inter } from "next/font/google";
import HomePage from "@/pages/Home/HomePage";
import Service from "./service/Service";
import About from "./About";
import Navbar from "./Navbar/Navbar";
import ShirtCart from "@/Components/ShirtCart";
import Footer from "./Footer";
import ImageChange from "@/Components/ImageChange";
import SingleProduct from "./SingleProduct";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <HomePage /> */}
      {/* <ShirtCart /> */}
      {/* <ImageChange /> */}
      {/* <Footer /> */}
      {/* <SingleProduct /> */}

      {/* <Service/> */}
        <About/>
    </main>
  );
}
