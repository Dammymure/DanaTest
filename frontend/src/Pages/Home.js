import React from 'react'
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button className='bg-black text-white px-2 py-1 rounded' onClick={() => navigate("/products")}>Display Filter</button>
      <button className='bg-black text-white px-2 py-1 rounded' onClick={() => navigate("/createuser")}>Create Account</button>
    </div>
  )
}

export default Home