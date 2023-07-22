// import '@/Home/Home.css'
import { Inter } from "next/font/google";
import Service from "./service/Service";
import About from "./About";
import Navbar from "./Navbar/Navbar";
import ShirtCart from "@/Components/ShirtCart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Service />
      <About />
      <ShirtCart />
    </main>
  );
}
