import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Loading from "../../../Loading/Loading";

const NewProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/myproducts?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {products.map((product) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
