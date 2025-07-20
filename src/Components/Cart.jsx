import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [activeCart, setActiveCart] = useState(false);

  const cart_items = useSelector((state) => state.cart.cart);

 const totalQty = cart_items.reduce((totalQty, item) => 
totalQty + item.quantity, 0);

 const totalPrice = cart_items.reduce((total ,item)=>
total + item.quantity * item.price, 0)
 console.log(typeof(totalPrice));
 
 const navigate = useNavigate();


  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out z-10`}
      >
        <div className=" flex justify-between items-center">
          <h3 className="font-semibold text-sm">My Order</h3>
          <MdOutlineCancel
            onClick={() => setActiveCart(!activeCart)}
            className="font-semibold text-lg hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cart_items.length > 0 ? cart_items.map((item, index) => {
          return (
            <CartItems
              key={index}
              item={item}
              id={item.id}
              price={item.price}
              fullName={item.fullName}
              desc={item.desc}
              img={item.img}
              quantity={item.quantity}
            />
          );
        }) : <h2
        className="text-xl text-center py-4 font-semibold" 
        >Your Cart Is Empty </h2>}

        <div className=" absolute  bottom-0 ">
          <h3>Items: {totalQty} </h3>
          {/* <h3>Total Amount:{totalPrice}</h3> */}
          <hr className="w-[90vw] lg:w-[18vw]" />
          <button
          onClick={()=> navigate("/success")}
          className="bg-green-500 font-bold px-3 py-2 rounded-md text-sm my-2 text-white w-full lg:w-[18vw]">
            CheckOut
          </button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className="bg-white p-3 shadow-md rounded-full text-5xl fixed bottom-4 right-4"
      />
    </>
  );
}

export default Cart;
