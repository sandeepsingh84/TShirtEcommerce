import { StoreIcon } from "@/utils/appIcons";
import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log('errors', errors)

  return (
    <div className="w-full   ">
      <div className="w-full ">
        <div>
          <h1 className="w-full text-8xl font-[sans-sarif] flex justify-center  pt-10">
            Contact us
          </h1>
        </div>
        <div className="w-full flex px-24 pb-10 mt-16">
          <div className="w-[50%] h-[800px]">
            {" "}
            <img
              className="w-[855px] h-[800px]"
              src="https://images.pexels.com/photos/14579191/pexels-photo-14579191.jpeg?auto=compress&cs=tinysrgb&w=5600"
            />
          </div>
          <div className="w-[50%] bg-white">
            <div className="w-full h-[800px] border">
              <form
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                })}
              >
                <div className="w-full px-8 mt-4">
                  <div className="flex gap-6">
                    <div>
                      <label className="text-xl" for="Firstname">
                        Firstname
                      </label>
                      <input
                        {...register("Firstname", {
                          required: true,
                          minlength: { value: 4, message:"min lenth 4" },
                        })}
                        className=" pl-4 h-12 bg-slate-50 shadow-md w-96"
                        type="text"
                        name="Firstname"
                        id="Firstname"
                        placeholder="Firstname.."
                      />
                      <p>{errors.firstname?.message}</p>
                    </div>

                    <div>
                      <label className="text-xl" for="Lastname">
                        Lastname
                      </label>
                      <input
                        {...register("Lastname", {
                          required: true,
                          minlength: { value: 4, messages: "min lenth 4" },
                        })}
                        className=" pl-4 h-12 bg-slate-50 shadow-md w-96"
                        type="text"
                        name="Lastname"
                        id="Lastname"
                        placeholder="Lastname.."
                      />
                      <p>
                        {errors.Lastname && (
                          <span className="text-red-400 text-4xl bottom-0 left-0">
                            This is
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="text-xl" for="Email">
                      Email
                    </label>
                    <input
                      className=" pl-4 h-12 bg-slate-50 shadow-md w-full"
                      type="text"
                      name="Email"
                      id="Email"
                      placeholder="Email.."
                    />
                  </div>

                  <div className="mt-6">
                    <label className="text-xl" for="Adress">
                      Adress
                    </label>
                    <input
                      className=" hover:border-b-blue-600 border pl-4 h-12 bg-slate-50 shadow-md w-full"
                      type="text"
                      name="Adress"
                      id="Adress"
                      placeholder="Adress..."
                    />
                  </div>
                  <div className="flex gap-6 mt-6">
                    <div>
                      <label className="text-xl" for="PhoneNo">
                        PhoneNo.
                      </label>
                      <input
                        className=" hover:border-b-blue-600 border pl-4 h-12 bg-slate-50 shadow-md w-96"
                        type="PhoneNo"
                        name="PhoneNo"
                        id="PhoneNo"
                        placeholder="PhoneNo..."
                      />
                    </div>

                    <div>
                      <label className="text-xl" for=" Pin Code">
                        Pin Code
                      </label>
                      <input
                        className=" pl-4 h-12 hover:border-b-blue-600 border bg-slate-50 shadow-md w-96"
                        type="Number"
                        name=" Pin Code"
                        id=" Pin Code"
                        placeholder=" Pin Code..."
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <input
                      className="h-14 w-56 border text-xl bg-blue-400 rounded-md text-white "
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
