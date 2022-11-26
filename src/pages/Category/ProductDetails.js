import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="text-center my-5">
        <h2 className="text-3xl font-serif font font-extrabold">
          All Products
        </h2>
        <p>
          If you want to buy anything from here please click the book button for
          your order
        </p>
      </div>
      <div className="grid gap-6 mt-10 mb-20">
        {products.map((product) => (
          <div key={product._id} className="">
            <div className="hero bg-base-200 w-3/4 mx-auto">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={product.img} alt=''
                  className="max-w-md rounded-lg shadow-2xl ml-10"
                />
                <div className="">
                  <h1 className="text-4xl font-bold text-center mb-3">{product.name}</h1>
                  <p className="text-xl font-bold mb-2">Original Price <span className="text-orange-500">${product.originalPrice}</span></p>
                  <p className="text-xl font-bold mb-2">Resale Price <span className="text-orange-500">${product.resalePrice}</span></p>
                  <p className="font-semibold mb-2">Location: {product.location}</p>
                  <p className="font-semibold mb-2">Posted date: {product.date}</p>
                  <p className="font-semibold mb-4">Used time: {product.used} year</p>
                  <button className="btn btn-outline">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
