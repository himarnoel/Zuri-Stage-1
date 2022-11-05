import React from "react";
import I4g from "../assets/I4G.png";
import zuri from "../assets/Vector.png";
import { useFormik } from "formik";
import { basicSchema } from "./../Schema/index";
import pad from "./../../node_modules/lodash-es/pad";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  //   console.log("formik", formik.values);
  return (
    <div className="flex justify-between items-center flex-col  h-screen m-2 lg:m-0">
      <div className="h-screen w-screen lg:w-[60%] lg:h-[80%]  mt-2 p-5 lg:mb-20">
        <h1 className="text-3xl mb-3 font-bold ">Contact Me</h1>
        <p className=" text-sm mb-2">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form onSubmit={formik.handleSubmit}>
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
                className={
                  formik.errors.firstname && formik.touched.firstname
                    ? "bg-gray-50 border border-gray-300 border-solid  focus:outline-red-500  text-sm rounded-lg  block w-full p-2.5"
                    : "bg-gray-50 border border-gray-300 border-solid  focus:outline-[#1570EF]  text-sm rounded-lg  block w-full p-2.5"
                }
                onChange={formik.handleChange}
                value={formik.values.firstname}
                onBlur={formik.handleBlur}
                placeholder="Enter your first name"
                required
              />
               {formik.errors.firstname && formik.touched.firstname ? (
                <p className="text-red-500 ">{formik.errors.firstname}</p>
              ) : (
                ""
              )}
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
                className={
                  formik.errors.lastname && formik.touched.lastname
                    ? "bg-gray-50 border border-gray-300 border-solid  focus:outline-red-500  text-sm rounded-lg  block w-full p-2.5"
                    : "bg-gray-50 border border-gray-300 border-solid  focus:outline-[#1570EF]  text-sm rounded-lg  block w-full p-2.5"
                }
                onChange={formik.handleChange}
                value={formik.values.lastname}
                onBlur={formik.handleBlur}
                placeholder="Enter your last name"
                required
              />
              {formik.errors.lastname && formik.touched.lastname ? (
                <p className="text-red-500 ">{formik.errors.lastname}</p>
              ) : (
                ""
              )}
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
                className={
                  formik.errors.email && formik.touched.email
                    ? "bg-gray-50 border border-gray-300 border-solid  focus:outline-red-500  text-sm rounded-lg  block w-full p-2.5"
                    : "bg-gray-50 border border-gray-300 border-solid  focus:outline-[#1570EF]  text-sm rounded-lg  block w-full p-2.5"
                }
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                placeholder="yourname@email.com"
                required
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-500 ">{formik.errors.email}</p>
              ) : (
                ""
              )}
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
                className={
                  formik.errors.message && formik.touched.message
                    ? "bg-gray-50 border border-gray-300 border-solid  focus:outline-red-500  text-sm rounded-lg  block w-full p-2.5"
                    : "bg-gray-50 border border-gray-300 border-solid  focus:outline-[#1570EF]  text-sm rounded-lg  block w-full p-2.5"
                }
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
                placeholder="Send me a message and I'll reply you as soon as possible..."
                required
              />
               {formik.errors.message && formik.touched.message ? (
                <p className="text-red-500 ">{formik.errors.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className=" flex items-center col-span-2 mb-4">
              <input
                id="remember"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.check}
                onBlur={formik.handleBlur}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-5 focus:ring-blue-300 "
                required
              />
              <p className="ml-2">
                You agree to providing your data to Olaniyi Emmanuel who may
                contact you.
              </p>
            </div>
            <button
              className="bg-[#1570EF] text-white font-bold py-2 px-4 rounded col-span-2"
              type="submit"
            >
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
