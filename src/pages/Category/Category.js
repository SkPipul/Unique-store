import { useQuery } from "@tanstack/react-query";
import React from "react";
import Products from "./Products";

const Category = () => {

  const {data: categories = []} = useQuery({
      queryKey: ['categories'],
      queryFn: () => fetch('https://unique-store-server.vercel.app/categories')
      .then(res => res.json())
  })

  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-4xl mb-2 uppercase font-bold">
          This is collection of used phones
        </h2>
        <p>
          You can see all of products and details by clicking the see detail
          button
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 gap-5 px-6">
        {categories.map((category) => (
          <Products
            key={category._id}
            category={category}
          ></Products>
        ))}
      </div>
    </div>
  );
};

export default Category;
