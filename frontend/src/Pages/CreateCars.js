import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function CreateCars() {
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
  setFormData(prevState => ({
   ...prevState,
   [name]: value
  }));
 };

  const navigate = useNavigate()


 const storedToken = localStorage.getItem('token');


 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.post(`https://danabackend.onrender.com/api/sendData`, formData, {
    headers: {
     Authorization: `Bearer ${storedToken}` // Include token in the headers
    }
   });
   Swal.fire({
    icon: 'success',
    title: 'Success',
    text: response.data.msg
   });
   setFormData({
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
   navigate('/cars')
  } catch (error) {
   Swal.fire({
    icon: 'error',
    title: 'Error',
    text: error.response.data.msg || 'Something went wrong!'
   });
  }
 };

 return (
  <div className="container mx-auto">
   <h1 className="text-2xl font-bold mb-4">Create Product</h1>
   <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
    <div className="mb-4">
     <label htmlFor="sellerId" className="block text-sm font-semibold">Seller ID</label>
     <input type="text" id="sellerId" name="sellerId" value={formData.sellerId} onChange={handleChange} className="form-input mt-1" />
    </div>
    <div className="mb-4">
     <label htmlFor="sellerName" className="block text-sm font-semibold">Seller Name</label>
     <input type="text" id="sellerName" name="sellerName" value={formData.sellerName} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="mb-4">
     <label htmlFor="sellerLocation" className="block text-sm font-semibold">Seller Location</label>
     <input type="text" id="sellerLocation" name="sellerLocation" value={formData.sellerLocation} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="mb-4">
     <label htmlFor="make" className="block text-sm font-semibold">Make</label>
     <input type="text" id="make" name="make" value={formData.make} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="mb-4">
     <label htmlFor="model" className="block text-sm font-semibold">Model</label>
     <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="mb-4">
     <label htmlFor="year" className="block text-sm font-semibold">Year</label>
     <input type="text" id="year" name="year" value={formData.year} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="mb-4">
     <label htmlFor="price" className="block text-sm font-semibold">Price</label>
     <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="mb-4">
     <label htmlFor="color" className="block text-sm font-semibold">Color</label>
     <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="mb-4">
     <label htmlFor="mileage" className="block text-sm font-semibold">Mileage</label>
     <input type="text" id="mileage" name="mileage" value={formData.mileage} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="mb-4">
     <label htmlFor="description" className="block text-sm font-semibold">Description</label>
     <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="form-input mt-1 border border-black" />
    </div>
    <div className="text-center">
     <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Submit</button>
    </div>
   </form>
  </div>
 );
}

export default CreateCars;

