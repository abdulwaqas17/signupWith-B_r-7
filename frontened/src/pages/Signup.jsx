import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
 
const Signup = () => {

  const navigate = useNavigate();

    const [formData,setFormData] = useState({
        name : '',
        email : '',
        password : '',
        number : '',
        age : ''
    })

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    console.log(formData);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post("http://localhost:3000/signup", formData);

            // data m aik obj milat h jis m wo hota h, jo hum backened se bhjty hn
            console.log(res.data.message); // 👈 Backend se response milta hai, uska message alert me show
            alert(res.data.message); 

           

            if (res.data.status == 200) {

              setFormData({
                name : '',
                email : '',
                password : '',
                number : '',
                age : ''
            })
          }

           

            if (res.data.status == 200) {

              navigate('/login');
          }



        } catch (error) {
            console.log(error.response.data.message)
            alert(error.response.data.message)
        }
    }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.number}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              value={formData.age}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Signup
          </button>
        </form>
          {/* Already have an account */}
    <p className="mt-6 text-center text-sm text-gray-600">
      Already have an account?
      <Link
        to="/login"
        className="text-blue-500 hover:underline ml-1"
      >
        Login here
      </Link>
    </p>
      </div>
    </div>
  );
};

export default Signup;
