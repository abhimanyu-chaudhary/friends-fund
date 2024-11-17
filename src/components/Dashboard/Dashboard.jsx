import React from "react";
import { useAuth } from "../../lib/provider/AuthProvider";

function Dashboard() {
    const { logOut } = useAuth(); // Use the logOut method from AuthProvider

  const handleLogout = async () => {
    await logOut(); // Calls the centralized logout function
  };


  return (
    <div className='h-screen text-center text-4xl font-bold py-[20%]'>
      <h2>Dashboard</h2>
      <h1 >You are Logged IN</h1>
      <button className='my-10 bg-red-300 p-7 rounded-md' onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default Dashboard;
