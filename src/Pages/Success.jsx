import React, { useState, useEffect } from 'react'
import { PropagateLoader } from 'react-spinners'
import succesImg from '../assets/images-removebg-preview.png'

function Success() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
   setTimeout(() => {
    setLoader(false)
   }, 3000);
  }, [])
  
  return (
    <div className=' relative flex flex-col items-center justify-center h-screen'>
      {
        loader ? (
         <PropagateLoader />
        ) : (
          <div className='text-center'>
           <h1 className='text-2xl font-semibold mb-3'>Order Successful!</h1>
      <p className='text-xl'>Your Order Has been Successfully Added.</p>
      </div>
        )
      }
    
    </div>
  )
}

export default Success