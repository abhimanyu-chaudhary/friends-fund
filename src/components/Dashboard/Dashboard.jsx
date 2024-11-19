import React, { useState } from "react";
import { useAuth } from "../../lib/provider/AuthProvider";

import LedgerForm from "./Backend/Input/LedgerForm";
import DisplayLedger from "./Backend/Operations/DisplayLedgerData";

function Dashboard() {
  const { logOut } = useAuth(); // Use the logOut method from AuthProvider
  const handleLogout = async () => {
    await logOut(); // Calls the centralized logout function
  };

  
  return (
    <>
    <div className='font-bold p- flex max-w-screen-xl  justify-between items-center mx-auto'>
      <h2>Dashboard</h2>    
      <div className="text-center flex items-center gap-5">
        <button className='my-10 bg-red-300 px-4 py-2 rounded-md' onClick={handleLogout}>Sign Out</button>
        <LedgerForm />
      </div>  
    </div>
    <div className="max-w-screen-xl mx-auto items-center bg-blue-100">
      <DisplayLedger />
    </div>
  
    </>
  );
}

export default Dashboard;
