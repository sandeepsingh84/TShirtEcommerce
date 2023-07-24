
import {  ArrowIcon, FbIcon } from "@/utils/appIcons";
import React, { useState } from "react";

// import img from "../../public/Images/star.png"

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const [Image, setImage] = useState("/Images/pink.jpg")

  const decreaseFunc = () => {
    if (count === 1) {
    } else if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseFunc = () => {
    if (count === 5) {
      alert("You can't buy more than 5 !");
    } else if (count < 8) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-10 w-full mt-10">
        <div className="">
          <img
            src={Image}
            className="h-[700px]"
          />
        </div>

        <div className="">
          <div className="flex gap-16 justify-between">
            <p className="font-bold text-xl">Lush Green Polo T-shirt</p>
            <img src="heart.png" className="w-6" />
          </div>

          <h1 className="text-xl font-bold mt-3">$549</h1>
          <p className="text-gray-500 mt-2">
            Inclusive of All Taxes + Free Shipping
          </p>

          <div className="flex gap-5 items-center">
            <img src="/star1.png" className="w-24" />
            <p>5.0 (8 Reviews)</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src="discount.png" className="w-14" />
            <p> Extra $ 100 OFF on $ 999 (Code:BEYOUNG 100)</p>
          </div>

          <div>
            <h1 className="mt-5 font-semibold">COLOR</h1>

            <div className="flex gap-1 mt-2">
              <div className="border rounded-full h-8 w-8 bg-pink-300 border-black" onClick={()=>{
                setImage("/Images/pink.jpg")
              }}></div>

              <div className="border rounded-full h-8 w-8 bg-gray-600 border-black" onClick={()=>{
                setImage("/Images/gray.jpg")
              }}></div>

              <div className="border rounded-full h-8 w-8 bg-sky-300 border-black" onClick={()=>{
                setImage("/Images/sky.jpg")
              }}></div>

              <div className="border rounded-full h-8 w-8 bg-black border-black" onClick={()=>{
                setImage("/Images/black.jpg")
              }}></div>

              <div className="border rounded-full h-8 w-8 bg-blue-700 border-black" onClick={()=>{
                setImage("/Images/blue.jpg")
              }}></div>

              <div className="border rounded-full h-8 w-8 bg-green-800 border-black" onClick={()=>{
                setImage("/Images/green.jpg")
              }}></div>

              <div className="border rounded-full h-8 w-8 bg-white border-black" onClick={()=>{
                setImage("/Images/white.jpg")
              }}></div>
            </div>
          </div>

          <div className="flex justify-between  items-center mt-5">
            <h1 className="text-xl font-semibold">SIZE</h1>
            <p className="text-blue-500">SIZE CHART</p>
          </div>

          <div className="flex gap-3 mt-2">
            <button className="border w-8 h-8 border-black rounded-full text-center text-xs hover:active:focus:outline-none focus:ring focus:ring-blue-300">
     
              M
            </button>

            <button className="border w-8 h-8 border-black rounded-full text-center text-xs hover: active:focus:outline-none focus:ring focus:ring-blue-300">
              L
            </button>

            <button className="border w-8 h-8 border-black rounded-full text-center text-xs hover:active:focus:outline-none focus:ring focus:ring-blue-300">
              XL
            </button>

            <button className="border w-8 h-8 border-black rounded-full text-center text-xs hover:active:focus:outline-none focus:ring focus:ring-blue-300">
              XXL
            </button>

            <button className="border w-9  h-9 border-black rounded-full text-center text-xs hover:active:focus:outline-none focus:ring focus:ring-blue-300">
              XXXL
            </button>
          </div>

          {/* Quility */}

          <div className="mt-5">
            <p className="font-semibold">QUALITY</p>
          </div>

          <div className="flex gap-10 border p-2 text-lg mt-8 w-36">
            <button onClick={decreaseFunc}> -</button>
            <div>{count}</div>
            <button onClick={increaseFunc} className="text-2xl">
              {" "}
              +
            </button>
          </div>

          <div>
            <div className="flex gap-2 border w-full  p-3 justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg mt-5">
          <img src="shopping-cart.png" className="w-6"/>
              <p className="">ADD TO CART</p>
            </div>
          </div>


          <div>
            <div className="flex gap-2 border w-full  p-3 justify-center items-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg mt-5">
            <ArrowIcon height={10} weight={10} />
              <p className="">BUY NOW</p>
            </div>
          </div>







        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
