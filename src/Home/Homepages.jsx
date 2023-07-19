import Image from "next/image";
import React, { useState } from "react";
// import '@/Home/Home.css'

const Homepages = () => {
  const [picture, setPicture] = useState("t-shirt4.png");
  console.log("picture", picture);
  function MyTshirt(shirt) {
    setPicture(shirt);
  }

  return (
    <div className="bg-gradient-to-r from-blue-300 to-fuchsia-300 px-32   w-full h-full" class='main'>
      <div className="flex justify-center w-full m-auto">
        <div>
          <h1 className="text-2xl mt-20 text-white font-semibold ">
            OUTFIT OF THE DAY{" "}
          </h1>

          <div className="text-5xl mt-5 font-serif w-[50%]">
            <h1 className="w-fit">ALL YOUR</h1> 
            <h1 className="mt-5 font-semibold font-[sant-serif]">STYLES ARE HERE</h1>
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

      <div className="flex justify-center gap-10 mt-40 ">
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
            src="/Images/t-shirt3.png"
            alt=""
            className="w-52"
            onClick={() => {
              MyTshirt("t-shirt3.png");
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
  );
};

export default Homepages;
