import React from 'react'
import { useNavigate } from 'react-router-dom';
import { supabase } from "../../lib/helper/supabaseClient";  // Import your Supabase client

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/");
    };


  return (
    <div className='h-screen text-center text-4xl font-bold py-[20%]'>
      <h1 >You are Logged IN</h1>
      <button className='my-10 bg-red-300 p-7 rounded-md' onClick={()=>handleLogout}>Sign Out</button>
    </div>
  )
}

export default Dashboard;
