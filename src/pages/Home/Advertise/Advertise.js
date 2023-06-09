import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Loading/Loading";

const Advertise = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('https://unique-store-server.vercel.app/advertise')
        .then(res => res.json())
    });
    if(isLoading){
        return <Loading></Loading>
    }

  return (
    <div className="bg-gray-200 py-20">
      <h1 className="text-4xl uppercase font-bold text-center text-green-600 mb-8">Available Product with biggest discount</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6">
      {
        products.map(product => <div key={product._id} className="w-full bg-base-100 shadow-xl mx-auto pb-6">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{product.name}</h2>
        </div>
        <figure>
          <img className="mx-auto" src={product.img} alt="" />
        </figure>
      </div>)
      }
    </div>
    </div>
  );
};

export default Advertise;
