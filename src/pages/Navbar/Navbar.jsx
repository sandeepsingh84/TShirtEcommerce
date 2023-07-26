import React, { useState } from "react";
import { CloseIcon, StoreIcon } from "@/utils/appIcons";
import Link from "next/link";

const Navbar = () => {
  const [search, setsearch] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex items-center h-16 justify-between px-16 shadow-md">
        <div className="flex">
          <div className="flex gap-2 items-center">
            <Link href="/HomePage">
              {" "}
              <StoreIcon width={36} height={36} />{" "}
            </Link>
            <p className="text-4xl font-semibold">Store</p>
          </div>
        </div>

        <div className="flex justify-between ">
          <nav className="flex  ">
            <ul className="flex gap-20 text-lg font-semibold ">
              <Link href="/HomePage">
                {" "}
                <li className="hover:text-blue-500 h-8 border-blue-500 w-14 hover:border-b-2 hover:border-t-2 ">
                  HOME
                </li>{" "}
              </Link>

              <Link href="/Categories">
                {" "}
                <li className="hover:text-blue-500 h-8 border-blue-500 w-18 hover:border-b-2 hover:border-t-2 ">
                  CATEGORIES
                </li>{" "}
              </Link>

              <Link href="/About">
                {" "}
                <li className="hover:text-blue-500 border-blue-500 w-18 hover:border-b-2 hover:border-t-2 ">
                  ABOUT US
                </li>
              </Link>
              <Link href="/ContactUs">
                {" "}
                <li className="hover:text-blue-500  border-blue-500 w-18 hover:border-b-2 hover:border-t-2">
                  CONTACT US
                </li>{" "}
              </Link>
              <Link href="">
                {" "}
                <li className="hover:text-blue-500  border-blue-500 w-18 hover:border-b-2 hover:border-t-2">
                  SHOP
                </li>
              </Link>
            </ul>
          </nav>
        </div>

        <div className="flex gap-4">
          <div>
            <img
              class="w-10 h-10"
              src="/search.png"
              onClick={() => {
                setsearch(true);
              }}
            />
          </div>
          <div>
            <img class="w-10 h-10" src="shopping-cart.png" />
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
        <div className="fixed  bg-black/70 z-10 h-full w-full top-0 left-0 right-0 bottom-0 m-auto text-end px-24  ">
          <div
            className="flex justify-end mt-12 ml"
            onClick={() => setsearch(false)}
          >
            <CloseIcon />
          </div>
          <div className="fixed z-50 top-0 left-0 right-0 bottom-0 w-[40%] bg-white  shadow-2xl m-auto justify-center border rounded-2xl h-[670px] items-center ">
            <div className="w-[100%] p-5 m-auto bg-red-00  ">
              <div className=" flex justify-center rounded-xl">
                <input
                  className="border w-[600px] bg-slate-100 h-12 rounded-md text-xl font-[sans-sarif] pl-6  "
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