import React from "react";
import { Link } from "react-router-dom";

const CategoryOption = ({ category }) => {
  const { categoryName, categoryId } = category;
  return (
    <div className="rounded-sm bg-gradient-to-r from-green-300 to-gray-200 hover:scale-105 transition-all duration-500 shadow-xl mx-auto">
      <div className="card-body text-center">
        <h2 className="text-3xl font-serif font-bold mx-auto">{categoryName}</h2>
        <p className="mb-8">For more details please click the detail button</p>
        <div className="card-actions justify-center">
          <Link to={`/category/${categoryId}`}><button className="btn bg-orange-500 border-none">See Detail</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryOption;
