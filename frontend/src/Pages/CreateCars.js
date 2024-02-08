// ProductForm.js

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function CreateCars() {
 const navigate = useNavigate()

 const [formData, setFormData] = useState({
  sellerId: '',
  sellerName: '',
  sellerLocation: '',
  make: '',
  model: '',
  year: '',
  price: '',
  color: '',
  mileage: '',
  description: ''
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
   ...prevFormData,
   [name]: value
  }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.post(`https://danabackend.onrender.com/api/sendData`, formData);
   // Display success alert
   Swal.fire({
    icon: 'success',
    title: 'Success',
    text: response.data.msg,
   });
   navigate("/cars")
  } catch (error) {
   // Display error alert
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error.response.data.msg || 'Something went wrong!',
   });
  }
 };

 return (
  <div className="max-w-md mx-auto mt-8">
   <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerId">
      Seller ID
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="sellerId"
      name="sellerId"
      type="text"
      placeholder="Seller ID"
      value={formData.sellerId}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerName">
      Seller Name
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="sellerName"
      name="sellerName"
      type="text"
      placeholder="Seller Name"
      value={formData.sellerName}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerLocation">
      Seller Location
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="sellerLocation"
      name="sellerLocation"
      type="text"
      placeholder="Seller Location"
      value={formData.sellerLocation}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="make">
      Make
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="make"
      name="make"
      type="text"
      placeholder="make"
      value={formData.make}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
      Model
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="model"
      name="model"
      type="text"
      placeholder="model"
      value={formData.model}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
      Year
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="year"
      name="year"
      type="text"
      placeholder="year"
      value={formData.year}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
      Price
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="price"
      name="price"
      type="text"
      placeholder="price"
      value={formData.price}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
      Color
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="color"
      name="color"
      type="text"
      placeholder="color"
      value={formData.color}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mileage">
      Mileage
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="mileage"
      name="mileage"
      type="text"
      placeholder="mileage"
      value={formData.mileage}
      onChange={handleChange}
     />
    </div>
    <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
      Description
     </label>
     <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="description"
      name="description"
      type="text"
      placeholder="description"
      value={formData.description}
      onChange={handleChange}
     />
    </div>
    <div className="flex items-center justify-between">
     <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      
     >
      Submit
     </button>
    </div>
   </form>
  </div>
 );
}

export default CreateCars;
