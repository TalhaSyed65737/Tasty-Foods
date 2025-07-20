import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({element}) {
  const CartItems = useSelector((state)=> state.cart.cart)
  return (
    CartItems.length > 0 ? element : <Navigate to= "/"/>
  )
}

export default ProtectedRoute