

// import '@/Home/Home.css'
import { Inter } from "next/font/google";
// import HomePage from "@/pages/Home/HomePage";
import Service from "./service/Service";
import About from "./About";
import Navbar from "./Navbar/Navbar";
import ShirtCart from "@/Components/ShirtCart";
import Footer from "./Footer";
import ImageChange from "@/Components/ImageChange";
import SingleProduct from "./SingleProduct";
import Mobilenavbar from "./Navbar/Mobilenavbar";
import Swiperloop from "@/Components/Swiperloop";

import CreateOtp from "@/Components/CreateOtp";
import Signup from "@/Components/Signup";
import SignIn from "./SignIn";
import Swipercode from "@/Components/Swipercode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>

      {/* <CreateOtp/> */}
      {/* <SignIn/> */}

{/* <Signup/>  */}
      {/* <SingleProduct /> */}
      <Swiperloop />
      {/* <Swipercode/> */}
      {/* <Service /> */}
    
      {/* <Mobilenavbar/> */}
    </main>
  );
}
