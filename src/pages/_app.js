import "@/styles/globals.css";
import "@/styles/ImageHover.module.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
