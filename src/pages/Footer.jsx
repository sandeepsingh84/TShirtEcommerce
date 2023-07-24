import React from "react";
import {
  ArrowIcon,
  FbIcon,
  InstaIcon,
  StoreIcon,
  YoutubeIcon,
} from "@/utils/appIcons";
const Footer = () => {
  return (
    <div className="w-full mt-8 ">
      <div className="w-full bg-black h-10 "></div>
      <div className="w-full bg-purple-400 h-[670px]">
        <div className="w-full flex justify-around px-44 pt-24 ">
          <div>
            <h1 className="text-white font-semibold text-lg">
              Start Up to date
            </h1>

            <div className="text-6xl font-bold font-[sans-sarif]">
              <div>Get our</div>
              <div>newsletter</div>
            </div>
            <div className="flex gap-4  mt-8">
              <div className="">
                <input
                  type="text"
                  placeholder="....."
                  className="bg-purple-400 border-b-4"
                />
              </div>
              <div>
                <button className="px-4 py-4 bg-white rounded-full">
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>

          <div>
            <img className="h-[300px] w-[300px] " src="/shirt1.png.png" />
          </div>
          <div className="">
            <div className="text-white font-semibold text-lg">
              GEt in touch{" "}
            </div>
            <div className="text-4xl">hello@popper.be</div>
            <div className="text-4xl">+32 (0) 93535 4563</div>

            <div className="text-4xl mt-8">stapaelin 70/303</div>
            <div className="text-4xl">9000 Ghent</div>
          </div>
        </div>

        <div className="w-full border border-purple-600  mt-44"></div>

        <div className="flex justify-between px-24 h-24 items-center">
          <div className="flex text-xl font-semibold  text-purple-600 gap-10">
            <div>Privacy</div>
            <div>Deisclaimer</div>
            <div>Term and condition</div>
            <div>Seg 10 005 006</div>
          </div>

          <div className="flex gap-6">
            <div className="text-xl font-semibold  text-purple-600 gap-10">
              See what we are up to
            </div>
            <div className="flex gap-4">
              <FbIcon width={24} height={24} />
              <InstaIcon width={24} height={24} />
              <YoutubeIcon width={28} height={28} />
            </div>
          </div>
          <div>
            <StoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
