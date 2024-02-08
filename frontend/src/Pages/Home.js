import React from 'react'
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex align-center justify-center m-auto items-center">
      <button className='bg-black text-white px-2 py-1 rounded' onClick={() => navigate("/products")}>Display Filter</button>
      <button className='bg-black text-white px-2 py-1 rounded' onClick={() => navigate("/createuser")}>Create Account</button>
    </div>
  )
}

export default Home