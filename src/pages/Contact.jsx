import React from "react";
import I4g from "../assets/I4G.png";
import zuri from "../assets/Vector.png";
import { useFormik } from "formik";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });
  console.log("formik", formik.values);
  return (
    <div className="flex justify-between items-center flex-col  h-screen m-2 lg:m-0">
      <div className="h-screen w-screen lg:w-[60%] lg:h-[80%]  mt-2 p-5 lg:mb-20">
        <h1 className="text-3xl mb-3 font-bold ">Contact Me</h1>
        <p className=" text-sm mb-2">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form action="" method="post">
          <div className="grid grid-cols-2 gap-3">
            <div className="mb-3">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="firstname"
                className="bg-gray-50 border border-gray-300 border-solid  focus:outline-[#1570EF]  text-sm rounded-lg  block w-full p-2.5"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900  "
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                name="lastname"
                className="bg-gray-50 border border-gray-300 focus:outline-[#1570EF] text-sm rounded-lg  block w-full p-2.5"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="col-span-2 mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 focus:outline-[#1570EF] text-sm rounded-lg  block w-full p-2.5"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="yourname@email.com"
                required
              />
            </div>
            <div className="col-span-2 mb-3">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                className="bg-gray-50 border border-gray-300 focus:outline-[#1570EF] text-sm rounded-lg  block w-full p-2.5 "
                onChange={formik.handleChange}
                value={formik.values.message}
                placeholder="Send me a message and I'll reply you as soon as possible..."
                required
              />
            </div>
            <div className=" flex items-center col-span-2 mb-4">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-5 focus:ring-blue-300 "
                required
              />
              <p className="ml-2">
                You agree to providing your data to Olaniyi Emmanuel who may
                contact you.
              </p>
            </div>
            <button className="bg-[#1570EF] text-white font-bold py-2 px-4 rounded col-span-2">
              Send message
            </button>
          </div>
        </form>
      </div>
      <footer className=" w-full py-5  ">
        <div className="h-[1px] mx-auto bg-[#EAECF0] lg:w-[78%] w-[90%]"></div>
        <div className="grid lg:grid-cols-3  mt-5 lg:justify-items-center gap-4 lg:gap-0 ml-2 ">
          <img src={zuri} alt="" className="object-contain" />
          <p className="text-[#667085]">HNG Internship 9 Frontend Task</p>
          <img src={I4g} alt="" className="object-contain" />
        </div>
      </footer>
    </div>
  );
};

export default Contact;
