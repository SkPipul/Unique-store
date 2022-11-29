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
    <div>
      <h1 className="text-4xl font-mono font-bold text-center text-green-500 mb-4">Available Product with biggest discount</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-5">
      {
        products.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{product.name}</h2>
        </div>
        <figure>
          <img src={product.img} alt="" />
        </figure>
      </div>)
      }
    </div>
    </div>
  );
};

export default Advertise;
