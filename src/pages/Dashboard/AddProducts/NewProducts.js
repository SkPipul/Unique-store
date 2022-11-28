import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Loading from "../../../Loading/Loading";

const NewProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/myproducts?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  const handleAdvertise = (products) => {
    console.log(products);
    // fetch('http://localhost:5000/advertise', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(products)
    // })
  }

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {products.map((product) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <div className="flex justify-between">
              <p className="font-semibold">
                Original Price: ${product.originalPrice}
              </p>
              <p className="font-semibold">
                Resale Price: ${product.resalePrice}
              </p>
            </div>
            <p className="font-semibold">Location: {product.location}</p>
            <button onClick={handleAdvertise} className="btn bg-green-500 border-none">Advertise</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
