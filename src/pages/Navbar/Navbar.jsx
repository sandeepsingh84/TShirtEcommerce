import React, { useState } from "react";
import { StoreIcon } from "@/utils/appIcons";

const Navbar = () => {
  const [search, setsearch] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex items-center h-16 justify-between px-16 shadow-md">
        <div className="flex">
          <div className="flex gap-2 items-center">
            <StoreIcon />
            <p className="text-4xl font-semibold">Store</p>
          </div>
        </div>

        <div className="flex justify-between " class="main">
          <nav className="flex  ">
            <ul className="flex gap-20 text-2xl font-bold font-[sans-sarif] ">
              <li className="hover:text-blue-500 ">Home</li>
              <li className="hover:text-blue-500">About us</li>
              <li className="hover:text-blue-500">Contact us</li>
              <li className="hover:text-blue-500">Shop</li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-4">
          <div>
            <img
              class="w-10 h-10"
              src="/shopping-cart.png"
              onClick={() => {
                setsearch(true);
              }}
            />
          </div>
          <div>
            <img class="w-10 h-10" src="/like.png" />
          </div>
          <div>
            <img
              class="w-10 h-10"
              src="https://www.prosportsinn.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fman.0920907a.png&w=640&q=75"
            />
          </div>
        </div>
      </div>

      {search && (
        <div className="fixed backdrop-blur-lg  z-10 h-full w-full top-0 left-0 right-0 bottom-0 m-auto ">
          <div className="fixed z-50 top-0 left-0 right-0 bottom-0 w-[40%]  shadow-2xl m-auto justify-center border rounded-2xl h-[670px] items-center  ">
            <div className="w-[100%] p-5 m-auto bg-red-00  ">
              <div className=" flex justify-center rounded-xl">
                <input
                  className="border w-[600px] h-10 rounded-lg text-xl font-[sans-sarif] pl-6  "
                  type="text"
                  placeholder="serach..."
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
