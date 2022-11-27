import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

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
        {products.map((product) => <Product
          key={product._id}
          product={product}
        ></Product>)}
      </div>
    </div>
  );
};

export default CategoryDetails;
