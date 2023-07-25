import Image from "next/image";
import React, { useState } from "react";
// import '@/Home/Home.css'

const HomePage = () => {
  const [picture, setPicture] = useState("t-shirt4.png");
const [image, setImage] = useState("")
  console.log("picture", picture);
  function MyTshirt(shirt) {
    setPicture(shirt);
  }

  return (
    <div>
      <div
        className="bg-gradient-to-r from-blue-300 to-fuchsia-300 px-32   w-full h-[850px]"
        class="main"
      >
        <div className="flex justify-center w-full m-auto">
          <div>
            <h1 className="text-2xl mt-20 text-white font-semibold ">
              OUTFIT OF THE DAY{" "}
            </h1>

            <div className="text-5xl mt-5 font-serif w-[50%]">
              <h1 className="w-fit">ALL YOUR</h1>
              <h1 className="mt-5 font-semibold font-[sant-serif]">
                STYLES ARE HERE
              </h1>
            </div>

            <p className="mt-10 w-1/2 text-xl">
              T-shirts are a staple of our everyday wardrobe—probably because of
              how incredibly versatile they are. They can work as a blank canvas
              for artwork in a way other clothing can’t, and that means the
              possibilities for t-shirt design are endless.
            </p>

            <div className="bg-white p-2 w-fit rounded-xl mt-5 ">
              <p className="text-blue-400 px-2 ">BUY NOW </p>
            </div>
          </div>

          <div className="mt-10 bg-inherit w-[50%]">
            <Image
              src={`/Images/${picture}`}
              width={500}
              height={500}
              className="w-[400px]"
              id="big-img"
            />
          </div>
        </div>

        <div className="flex justify-center gap-10 mt-20 ">
          <div className="">
            <Image
              width={500}
              height={500}
              src="/Images/t-shirt2.png"
              alt="/Images/jacket2.png"
              className="w-52"
              onClick={() => {
                MyTshirt("t-shirt2.png");
              }}
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              src="/Images/tshirt1.png"
              alt=""
              className="w-52 mt-5"
              onClick={() => {
                MyTshirt("tshirt1.png");
              }}
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              src="/Images/t-shirt4.png"
              alt=""
              className="w-52"
              onClick={() => {
                MyTshirt("t-shirt4.png");
              }}
            />
          </div>
        </div>
      </div>

      {/* video */}

      <div>
        <div className="text-8xl font-[sabs-sarif] flex justify-center mt-20">
          Styles Clothes
        </div>

        <div className="flex pt-24   justify-center  w-[100%] m-auto bg-sky-100">
          <div className="w-[50%] h-[500px] bg-red-00 m-auto">
            <iframe
              className="w-[100%] h-[100%]"
              // src="https://player.vimeo.com/video/512170000?h=64d3622777&autoplay=1&loop=1&byline=0&portrait=0"
              frameborder="0"
              allow="autoplay; fullscreen;"
              allowfullscreen
            ></iframe>
          </div>

          <div className="w-[35%]">
            <div>
              <p className="text-2xl font-semibold ">Clothes</p>
            </div>

            <div className="w-[70%]">
              <p className="text-xl">
                Clothing are items used to cover the human body. Humans are the
                only animals that wear clothing. During the many thousands of
                years between losing body hair and learning to make clothes,
                humans were naked.[1] Some native people in warm, humid climates
                continue to be naked in everyday life.
              </p>
            </div>
          </div>
        </div>



      </div>







{/* Swiper loop  */}





  



    </div>
  );
};

export default HomePage;
