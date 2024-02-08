import React from 'react'
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col align-center justify-center h-screen items-center gap-4 ">
      <div>
        <h2 className="text-4xl">Damilola Famurewa</h2>
      </div>
      <div className="flex gap-4">
      <button className='bg-black text-white px-2 py-1 rounded' onClick={() => navigate("/products")}>Display Filter</button>
      <button className='bg-black text-white px-2 py-1 rounded' onClick={() => navigate("/createuser")}>Create Account</button>

      </div>
    </div>
  )
}

export default Home