import React from "react";
import { Link } from "react-router-dom";

const CategoryOption = ({ category }) => {
  const { categoryName, categoryId } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold mx-auto">{categoryName}</h2>
        <p className="mb-8">For more details please click the detail button</p>
        <div className="card-actions justify-center">
          <Link to={`/category/${categoryId}`}><button className="btn bg-orange-500 border-none">See Detail</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryOption;
