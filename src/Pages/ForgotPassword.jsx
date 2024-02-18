import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [note, setNote] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Sending mail !", {
      position: toast.POSITION.TOP_RIGHT,
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/reset_email",
        formData
      );
      console.log("Email sent successfully!");
      setFormData({ email: "" });
      toast.success("Mail successfully sent !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setNote(true)
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <div className="h-screen border flex items-center justify-center border-2xl">
        <ToastContainer />

        <div class="max-w-lg w-1/3 mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          {!note && (
            <div>
              <h1 class="text-4xl font-medium ">Reset password</h1>
              <p class="text-slate-500 mt-4">
                Fill up the form to reset the password
              </p>

              <form action="" class="my-10" onSubmit={handleSubmit}>
                <div class="flex flex-col space-y-5">
                  <label for="email">
                    <p class="font-medium text-slate-700 pb-2">Email address</p>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>

                  <button class="w-full py-3 font-medium text-white bg-gray-700  inline-flex space-x-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>

                    <span>Reset password</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {note && (
            <div>
            
                <div class="relative p-1 w-full max-w-2xl max-h-full">
               
                    <div class="p-4 md:p-5 space-y-4">
                      <p class="text-base leading-relaxed font-bold text-gray-700 dark:text-gray-400">
                        A password reset link has been sent to your email !
                      </p>
                     
                    </div>
                  </div>
                </div>
         
            
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
{
  /* <form className="" onSubmit={handleSubmit}>     
        <div>
          <label htmlFor="email" className="">New Password</label>
          <input type="email" name="email" id="password" className="" required="" 
          value={formData.email}
          onChange={handleChange} />
        </div>
        <button type="submit" className="">Send link</button>
      </form> */
}
