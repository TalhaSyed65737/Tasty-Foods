import React, { useState, useEffect } from "react";
import FoodData from "../Data/FoodData";
import { setCategory } from "../Redux/Slices/Category";
import { useDispatch, useSelector } from "react-redux";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  let listUniqueCategories = () => {
    let uniqueCategories = [...new Set(FoodData.map((food) => food.category))];

    setCategories(uniqueCategories);

    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state)=> state.category.category);
 
console.log("🟠 Selected Category from Redux:", selectedCategory);


  return (
    <div className="px-4 py-5">
      <div className="flex flex-col gap-3 mb-5">
        <h2 className="text-xl font-semibold">Find The Best Food</h2>
      </div>
      {/* *************************************** */}
      <div className="flex gap-2 text-sm overflow-x-auto scroll-smooth">

        <button
            onClick={()=> dispatch(setCategory("All"))}
             className= {`px-3 py-2 bg-gray-200 font-semibold rounded-md hover:bg-green-500 hover:text-white transition-all duration-300 ${selectedCategory === "All" ? 'bg-orange-500 text-white' : ''}
`}>
             All
            </button>

        {categories.map((category, index) => {
          return (
            <button
            onClick={()=> dispatch(setCategory(category))}
            key={index}
             className= {`px-3 py-2 bg-gray-200 font-semibold rounded-md hover:bg-green-500 hover:text-white transition-all duration-300 ${selectedCategory === category ? 'bg-orange-500 text-white' : ''}`}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryMenu;
