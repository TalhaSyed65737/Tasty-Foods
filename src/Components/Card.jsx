import React from "react";
import { FaRupeeSign, FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlice";



function Card({item, handleToast}) {
  const{fullName,img,price,desc,rating, id, } =item;

  const dispatch = useDispatch();

  return (
    <div className="w-60 bg-white rounded-lg py-2 px-3">
      <div className=" img ">
        <img
          className="w-auto h-[130px] object-fit hover:scale-110 transition-all duration-300 ease-in-out rounded-md cursor-grab overflow-hidden"
          src={img}
          alt=""
        />
      </div>
      <div className="card-name-price flex justify-between items-center mt-2 py-1">
        <h2 className="font-semibold text-sm">{fullName}</h2>

        <h5 className="text-green-600 text-sm flex gap-1 items-center">
          <FaRupeeSign />
          {price}
        </h5>
      </div>

      <div className="card-info">
        <h6 className="text-sm">
        {desc.length > 50 ? `${desc.slice(0, 50)}...` : desc}
        </h6>
      </div>

      <div className="rating-cartBtn flex justify-between items-center ">
        <h2 className="text-sm flex items-center gap-1"> 
          <FaStar className="text-yellow-400 text-xl"/>
         {rating}</h2>
        <button
       onClick={()=>{
        dispatch(addToCart({id, fullName, img, desc, rating,  quantity:1}));
        
        handleToast(fullName);
       }}
        className="px-2 py-1 bg-green-500 rounded-md text-white font-semibold text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
