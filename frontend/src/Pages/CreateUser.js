import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom'

function CreateUser() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  // State to store response message from the server
  const [responseMsg, setResponseMsg] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend endpoint
      const response = await axios.post(`https://danabackend.onrender.com/register/createuser`, formData);
      // Update response message state with server response
      setResponseMsg(response.data.msg);

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: response.data.msg,
        showConfirmButton: false,
        timer: 2000 
      });
      navigate("/login")
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred. Please try again later.',
        showConfirmButton: true
      });
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    // Update form data state with input values
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
      {responseMsg && <p className="text-green-500 mb-4">{responseMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default CreateUser