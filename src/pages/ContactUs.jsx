import { StoreIcon } from "@/utils/appIcons";
import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors", errors);

  return (
    <div className="w-full   ">
      <h1 className="w-full text-8xl font-[sans-sarif] flex justify-center  pt-10">
        Contact us
      </h1>
      <div className="w-[90%] m-auto h-[800px] flex mt-12  ">
        <div className="w-[50%]">
          <img
            className="h-[800px] w-[100%]"
            src=" https://images.pexels.com/photos/14579191/pexels-photo-14579191.jpeg?auto=compress&cs=tinysrgb&w=5600"
            alt=""
          />
        </div>

        <div className="w-[50%] border">
          <form
            action=""
            onSubmit={handleSubmit((data) => {
              console.log("data", data);
            })}
          >
            <div className="px-6">
              <div className="w-full gap-4  flex mt-8">
                <div className="w-full">
                  <input
                    {...register("Firstname", { required: true })}
                    type="text"
                    placeholder="Firstname..."
                    className=" pl-4 border hover:border-blue-300 rounded-sm bg-slate-100 relative  shadow-lg h-12  w-full"
                  />
                  <p>
                    {errors.Firstname && (
                      <span className="text-md  absolute top-50 left-50 text-red-400 w-full">
                        required!
                      </span>
                    )}
                  </p>
                </div>

                <div className="w-full">
                  <input
                    {...register("Lastname", { required: true })}
                    type="text"
                    placeholder="Lastname..."
                    className="pl-4  border hover:border-blue-300 bg-slate-100 w-full relative rounded-sm shadow-lg h-12"
                  />
                  <p>
                    {errors.Lastname && (
                      <span className="text-md absolute top-50 left-50  text-red-400 w-full">
                        required!
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="w-full mt-10">
                <input
                  {...register("Email", { required: true })}
                  type="text"
                  placeholder="Email..."
                  className="pl-4  border hover:border-blue-300 rounded-sm bg-slate-100 w-full relative shadow-lg h-12"
                />
                <p>
                  {errors.Email && (
                    <span className="text-md absolute top-50 left-50  text-red-400 w-full">
                      required!
                    </span>
                  )}
                </p>
              </div>

              <div className="w-full mt-10">
                <input
                  {...register("Adress", { required: true })}
                  type="text"
                  placeholder="Adress..."
                  className="pl-4  border hover:border-blue-300 rounded-sm bg-slate-100 relative w-full shadow-lg h-12"
                />
                <p>
                  {errors.Adress && (
                    <span className="text-md absolute top-50 left-50 text-red-400 w-full">
                      required!
                    </span>
                  )}
                </p>
              </div>

              <div className="w-full mt-10">
                <input
                  {...register("City", { required: true })}
                  type="text"
                  placeholder="City..."
                  className="pl-4  border hover:border-blue-300 rounded-sm bg-slate-100 w-full relative shadow-lg h-12"
                />
                <p>
                  {errors.City && (
                    <span className="text-md absolute top-50 left-50 text-red-400 w-full">
                      required!
                    </span>
                  )}
                </p>
              </div>

              <div className="w-full mt-10">
                <input
                  {...register("State", { required: true })}
                  type="text"
                  placeholder="State..."
                  className="pl-4  border hover:border-blue-300 rounded-sm bg-slate-100 w-full relative shadow-lg h-12"
                />
                <p>
                  {errors.State && (
                    <span className="text-md absolute top-50 left-50 text-red-400 w-full">
                      required!
                    </span>
                  )}
                </p>
              </div>

              <div className="w-full gap-4  flex mt-10">
                <div className="w-full">
                  <input
                    {...register("PhoneNo", { required: true })}
                    type="text"
                    placeholder="PhoneNo..."
                    className=" pl-4 border hover:border-blue-300 rounded-sm relative bg-slate-100  shadow-lg h-12  w-full"
                  />
                  <p>
                    {errors.PhoneNo && (
                      <span className="text-md absolute top-50 left-50 text-red-400 w-full">
                        required!
                      </span>
                    )}
                  </p>
                </div>

                <div className="w-full">
                  <input
                    {...register("PinCode", { required: true })}
                    type="text"
                    placeholder="PinCode..."
                    className="pl-4  border hover:border-blue-300 bg-slate-100 relative w-full rounded-sm shadow-lg h-12"
                  />
                  <p>
                    {errors.PinCode && (
                      <span className="text-md absolute top-50 left-50  text-red-400 w-full">
                        required!
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div><input className="h-28  w-full border bg-slate-100 shadow-lg rounded-sm mt-10 pl-4 hover:bg-white" type="text" placeholder="leave a note ..." /></div>

              <div className="mt-10">
                {" "}
                <input
                  className="bg-blue-300 rounded-md text-white text-lg h-14 w-44"
                  type="submit"
                  name=""
                  id=""
                />{" "}
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-6xl flex justify-center ">
          Your feedback is valueable
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[1000px] h-[700px] mt-16  flex justify-evenly  ">
          <div>
            <img
              className="w-[200px] h-[200px]"
              src="https://www.volkswagen.co.in/app/site/contactus/images/icon_0001_IconContact.jpg"
              alt=""
            />

            <div className="mt-5">
              <div className="flex justify-center">
                <h1 className="text-2xl font-semibold">Toll free Number</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-xl">1800 102 0909</h1>
              </div>
            </div>
          </div>

          <div>
            <img
              className="w-[200px] h-[200px]"
              src="https://www.volkswagen.co.in/app/site/contactus/images/icon_0000_IconEmail.jpg"
              alt=""
            />

            <div className="mt-5">
              <div className="flex justify-center">
                <h1 className="text-2xl font-semibold">Write to us</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-lg">customer care @mercedes</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-lg">Mercedes.</h1>
              </div>
            </div>
          </div>

          <div>
            <img
              className="w-[200px] h-[200px]"
              src="https://www.volkswagen.co.in/app/site/contactus/images/icon_0002_IconContact_Location.jpg"
              alt=""
            />

            <div className="mt-5">
              <div className="flex justify-center">
                <h1 className="text-2xl font-semibold">Toll free Number</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-xl">1800 102 0909</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-2xl font-semibold">Write to us</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-lg">customer care @mercedes</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-lg">Mercedes.</h1>
              </div>
              <div>
                <h1 className="flex justify-center text-lg mt-2">
                  +91 8477663399
                </h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-lg">customer care @mercedes</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-lg">Mercedes.</h1>
              </div>
              <div>
                <h1 className="flex justify-center text-lg mt-2">
                  +91 8477663399
                </h1>
              </div>
            </div>
          </div>

          <div>
            <img
              className="w-[200px] h-[200px]"
              src="https://www.volkswagen.co.in/app/site/contactus/images/whatsapp-icon.jpg?v=1"
              alt=""
            />

            <div className="mt-5">
              <div className="">
                <h1 className="text-xl font-semibold text-slate-900">
                  Type "Hi" to start the{" "}
                </h1>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900 flex justify-center">
                  Conversation
                </h1>
              </div>
              <div>
                <h1 className="flex justify-center text-lg mt-2">
                  +91 8477663399
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default ContactUs;

// https://images.pexels.com/photos/14579191/pexels-photo-14579191.jpeg?auto=compress&cs=tinysrgb&w=5600