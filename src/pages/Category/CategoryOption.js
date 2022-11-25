import React from "react";

const CategoryOption = ({ category }) => {
  const { categoryName } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold mx-auto">{categoryName}</h2>
        <p className="mb-8">For more details please click the detail button</p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-500 border-none mx-auto">See Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryOption;
