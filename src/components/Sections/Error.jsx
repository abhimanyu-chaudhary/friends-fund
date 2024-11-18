import React from 'react'
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-semibold'>ERROR 404</h1>
      <p className='cursor-pointer font-semibold underline' onClick={()=> navigate("/")}>Get back to the Homepage</p>
    </div>
  )
}

export default Error;
