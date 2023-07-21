import React from "react";

const ShirtCart = () => {
  return (
    <div className="w-full px-28 h-[100vh] border">
      <div className="flex  ">
        <div className="w-[50%] pl-20">
          <div className="flex">
            <div className="pt-56 mr-4">
              <img
                className="h-[400px] w-[300px] rounded-lg"
                src="https://hrkit.rometheme.pro/zeprint/wp-content/uploads/sites/70/2023/03/photo-5-3.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="pt-32">
                <img
                  className="w-[300px] h-[200px] rounded-lg"
                  src="https://hrkit.rometheme.pro/zeprint/wp-content/uploads/sites/70/2023/03/photo-7-1536x1024.jpg"
                  alt=""
                />
              </div>
              <div className="mt-6">
                <img
                  className="w-[300px] h-[400px] rounded-lg"
                  src="https://hrkit.rometheme.pro/zeprint/wp-content/uploads/sites/70/2023/03/photo-6-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] ml-4">
          <div>
            <h1 className="text-xl font-bold pt-48 text-purple-500">
              PRINTING T-SHIRT COMPANIES
            </h1>
          </div>
          <div>
            <h1 className="text-5xl font-semibold mt-3">
              If you are Looking for Printing T-shirt Company,Create any Design
              & Fast!
            </h1>
          </div>
          <div>
            <p className="mt-6">
              Aliquet risus feugiat in ante. Pharetra convallis posuere morbi
              leo urna molestie at. Ipsum a arcu cursus vitae. Sodales ut etiam
              sit amet nisl purus in. Enim nec dui nunc mattis enim ut. Aliquet
              enim tortor at auctor.
            </p>
          </div>
          <div>
            <p className="mt-6">
              Aliquet risus feugiat in ante. Pharetra convallis posuere morbi
              leo urna molestie at. Ipsum a arcu cursus vitae. Sodales ut etiam
              sit amet nisl purus in. Enim nec dui nunc mattis enim ut. Aliquet
              enim tortor at auctor.
            </p>
          </div>

          <div className="flex mt-8">
            <div>
              <div className="flex">
                <div>
                  <img className="w-8 h-8" src="check.png" alt="" />
                </div>
                <div>
                  <h1 className="text-xl pt-1 ml-3">
                    Easy to Create & Customize
                  </h1>
                </div>
              </div>
              <div className="flex mt-8">
                <div>
                  <img className="w-8 h-8" src="check.png" alt="" />
                </div>
                <div>
                  <h1 className="text-xl pt-1 ml-3">
                    Premium Quality T-shirte
                  </h1>
                </div>
              </div>
            </div>

            <div className="ml-12">
              <div className="flex m">
                <div>
                  <img className="w-8 h-8" src="check.png" alt="" />
                </div>
                <div>
                  <h1 className="text-xl pt-1 ml-3">1000+ Design Catalogue</h1>
                </div>
              </div>
              <div className="flex mt-8">
                <div>
                  <img className="w-8 h-8" src="check.png" alt="" />
                </div>
                <div>
                  <h1 className="text-xl pt-1 ml-3">
                    Competitive Product Pricing
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtCart;
