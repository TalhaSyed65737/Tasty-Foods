import React from "react";
import { FaRupeeSign } from "react-icons/fa6";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {removeFromCart, incrementQuantity, decrementQuantity} from "../Redux/Slices/CartSlice";


function CartItems({item}) {

  let{fullName,img,price,desc,rating, id, quantity} =item;

  const dispatch = useDispatch();

  return (
    <div className="shadow-lg rounded-md flex py-2 px-2">
      <div className="img">
        <img
          className="w-12 h-12"
          src={img}
          alt="Pizza image"
        />
      </div>

      <div className="cartItemDesc flex flex-col gap-2 items-start justify-center mb-2 leading-5">
        <h2 className="text-sm font-semibold">{fullName}</h2>
         <h4 className="text-sm font-semibold text-green-500 flex items-center justify-start gap-1">
          <FaRupeeSign /> {price} 
         </h4>
      </div>

      <div className=" flex items-center gap-2 justify-end mt-8 cursor-pointer ms-auto">
        <GrSubtractCircle
        onClick={()=> quantity > 1 ? dispatch(decrementQuantity({id})) : quantity = 0}
        // es ka matlab hai ke agar quantity 1 se zyada ho tabhi decrement karo
        
        className="hover:text-red-300 "/> 
        {quantity}
         <IoIosAddCircleOutline
         onClick={()=> quantity > 1 ? dispatch(incrementQuantity({id})) : quantity = 0}
          className="hover:text-red-300 "/>
      </div>

      <div  className="flex justify-end  gap-2 cursor-pointer">
        <MdDelete 
        onClick={()=>{
           dispatch(removeFromCart({id}))
      }}
        />
      </div>
    </div>
  );
}

export default CartItems;
