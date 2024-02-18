import React, { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate, useParams, NavLink } from 'react-router-dom';

import axios from "axios";
const Resetpassword = () => {
  const navigate = useNavigate();
  const { id } =useParams();

    const [formData, setFormData] = useState({
        password: "",
        cpassword: ""
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        console.log(formData.password==formData.cpassword);
        e.preventDefault();
        if(formData.password!=formData.cpassword){
          toast.warning("passwords does not match !", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
    
        try {
          const response = await axios.post(`http://localhost:5000/api/user/resetpassword/${id}`, formData);
        console.log(response.statusText=="OK");
        if(response.statusText=="OK"){
          toast.success("password reset successfully !", {
            position: toast.POSITION.TOP_RIGHT
          });
          setFormData({
            password:"",
            cpassword:""
          })
          navigate("/login")
        }
      
        } catch (error) {
          console.error("Error sending email:", error);
          
        }
      };

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handleSubmit}>
            
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input type="password" name="password" id="password" placeholder="" 
                  value={formData.password}
                  onChange={handleChange} 
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div>
                  <label for="cpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="password" name="cpassword" id="confirm-password" placeholder="" 
                  value={formData.cpassword}
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
             
              <button type="submit" class="w-full text-white bg-gray-600 hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center "

              
              >Reset passwod</button>
          </form>
      </div>
  </div>
</section>
<ToastContainer />

    </div>
  )
}

export default Resetpassword
