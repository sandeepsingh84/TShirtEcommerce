import React from "react";

const About = () => {
  return (
    <div className="w-full mt-1">
      <div
        className='bg-[url("https://images.pexels.com/photos/9594677/pexels-photo-9594677.jpeg?auto=compress&cs=tinysrgb&w=5400")] 
bg-cover bg-no-repeat h-[100vh] '
      >
        <div className="p-24 w-[full] ">
          <div className="w-[50%]">
            <h1 className="font-semibold text-5xl font-serif">FASHION</h1>
            <p className="mt-3 text-xl">
              Fashion refers to anything that becomes a rage among the masses.
              Fashion is a popular aesthetic expression. Most Noteworthy, it is
              something that is in vogue. Fashion appears in clothing, footwear,
              accessories, makeup, hairstyles, lifestyle, and body proportions.
              Furthermore, Fashion is an industry-supported expression. In the
              contemporary world, people take fashion very seriously. Fashion is
              something that has permeated every aspect of human culture.
            </p>
          </div>
        </div>
      </div>

      <p className="font-bold text-5xl text-center text-red-500 mt-32">
        OUR STORY
      </p>

      <div className="flex ">
        <div className="flex w-full mt-4 justify-around">
          <div className="w-[30%]">
            <img
              src="https://images.pexels.com/photos/5717077/pexels-photo-5717077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-[100%]"
            />
            <img
              src="https://www.morebusiness.com/wp-content/uploads/2020/09/handwritten-email-signature.jpg"
              className="h-32 w-32"
            />
          </div>

          <div className="w-[30%]">
            <p className="text-2xl mt-4 italic pt-20 " data-aos="fade-right">
              IN 2013 WE DROPPED OUT OF COLLEGE WITH THE DREAM OF SHAKING UP
              WITH THE FASHION IMDUSTRY
            </p>
            <p className="text-2xl mt-4 italic">
              Tired of big brands and its shopping criteria ,we get out to
              create an online-first brand.Our original work design and a
              successful campaign got at all the grounds through social media
              and then it grows globally ,along with our company.
            </p>
            <p className="text-2xl mt-4 italic">
              Today with the support of our team we reached at the peak with thr
              help of online platform Clothing is also worn for decoration and
              have different beliefs and customs about what type of clothing
              should be worn. For many people, clothing is a status symbol. It
              helps people project an image. Often, clothing is a form of
              self-expression. Adults in different social or work situations
              present different views of themselves by the clothes they wear.
            </p>
          </div>

          <div className="w-[30%]">
            <img
              src="https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-[100%]"
              data-aos="fade"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0605/8508/3119/products/Screenshot_19.png?v=1666923538&width=1445"
              className="h-32 w-36"
            />
          </div>
        </div>
      </div>



  {/* About us */}

  <div className="flex justify-center px-24 mt-20">
        <div className="w-[50%] px-10">
          <h1 className="text-5xl font-serif font-semibold">ABOUT US </h1>

          <p className="w-full text-xl mt-5">
            An About Us page is an integral piece of content to have on your
            website. Every single successful business has one, no matter their
            industry or what they sell. After all, every brand has a story – and
            your About Us page helps you tell yours. That’s important because,
            these days, story and connection matter more than ever to customers.
            In a Demand Gen survey, 55% of B2B buyers said content that tells a
            strong, resonating story is what would make them most likely to talk
            to sales. Because your About Us page is one of the first places
            customers will look to find out about your business and story.
          </p>

          <div className=" shadow-2xl w-fit">
            <p className="bg-black w-fit rounded-lg text-white p-2 mt-20 ">
              LEARN MORE
            </p>
          </div>
        </div>

        <div className="w-[50%] px-10 ">
          <img src="https://images.pexels.com/photos/6382989/pexels-photo-6382989.jpeg?auto=compress&cs=tinysrgb&w=5400&lazy=load"  className="rounded-xl shadow-lg"/>
        </div>
      </div>




      <div className="flex w-full  items-center justify-center   py-12">
        <div className="w-[100%]">
          <div className="flex justify-center gap-50  w-screen  h-[800px] ">
            <div className="grid grid-col-1  gap-5" data-aos="">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[850px] w-[800px]">
                  <img
                    src="\Images\aboutshirt.jpeg"
                    className="h-[800px] w-[500px] object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all mt-20 ">
                  <h1 className="text-3xl font-bold text-white">T-SHIRT</h1>
                </div>
              </div>
            </div>

            <div className="grid grid-col-1  gap-5" data-aos="">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[850px] w-[800px] ">
                  <img
                    src="\Images\abouttshirt.jpeg"
                    className="h-[800px] w-[500px] object-cover group-hover:rotate-3 group-hover:scale-150 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all mt-20">
                  <h1 className="text-3xl font-bold text-white">SHIRT</h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5" data-aos="">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[450px] w-[800px] ">
                  <img
                    src="\Images\suit.jpeg"
                    className="h-[800px] w-[500px] object-cover group-hover:rotate-3 group-hover:scale-150 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all mt-20">
                  <h1 className="text-3xl font-bold text-white">
                    {" "}
                    THREE PIECE SUITS
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-col-1  gap-5" data-aos="">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[450px] w-[800px] ">
                  <img
                    src="\Images\aboutshirt1.jpeg"
                    className="h-[800px] w-[400px] object-cover group-hover:rotate-3 group-hover:scale-150 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all mt-20">
                  <h1 className="text-3xl font-bold text-white"></h1>
                  {/* <p className="text-lg italic mb-3 text-white duration-300">
                    {" "}
                    Laptops,Watches,Phones,Electrical Chips{" "}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* OUR QUALITIES */}





    
    </div>
  );
};

export default About;
