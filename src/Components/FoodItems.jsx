import React from "react";
import Card from "./Card";
import FoodData from "../Data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const handleToast = (fullName) => toast.success(` ${fullName} Added To Cart`);

function FoodItems() {
  const category = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap justify-center lg:justify-start gap-5 mx-24 mb-6 ">
        {FoodData.filter((item) => {
          if (category === "All") {
            return( item.fullName && item.fullName.toLowerCase().includes(search.toLowerCase()));
          } else{
            return (category === item.category && item.fullName.toLowerCase().includes(search.toLowerCase()))
          }
         
        })
        .map((item, index) => (
          <Card
            item={item}
            key={index}
            id={item.id}
            img={item.img}
            price={item.price}
            desc={item.desc}
            rating={item.rating}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
}

export default FoodItems;
