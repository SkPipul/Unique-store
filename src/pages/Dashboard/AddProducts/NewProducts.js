import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Loading from "../../../Loading/Loading";
import ConfirmDeleteUser from "../ConfirmDeleteUser/ConfirmDeleteUser";

const NewProducts = () => {
  const navigate = useNavigate();
  const [deleteProduct, setDeleteProduct] = useState(null);

  const closeModal = () => {
    setDeleteProduct(null);
  };

  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/myproducts?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/myproducts/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          swal("Yahoooo!", "Product deleted succefully", "success");
        }
      });
  };

  const handleAdvertise = (product) => {
    console.log(product);
    fetch("http://localhost:5000/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          navigate("/");
          swal("Good Job", "Advertise posted successfully", "success");
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {products.length !== 0 ? (
        <h1 className="text-4xl font-serif font-bold text-center my-4">
          My Products
        </h1>
      ) : (
        <h1 className="text-3xl font-serif font-bold text-center my-4 text-red-500">
          No Product added right now
        </h1>
      )}
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
              <p className="font-bold">Status: Available</p>
              <button
                onClick={() => handleAdvertise(product)}
                className="btn bg-green-500 border-none"
              >
                Advertise
              </button>
              <label
                onClick={() => setDeleteProduct(product)}
                htmlFor="confirmation-modal"
                className="btn bg-red-500 border-none"
              >
                Delete
              </label>
            </div>
            <div>
              {deleteProduct && (
                <ConfirmDeleteUser
                  title={"Are you sure you want to delete this product?"}
                  deleteAction={handleDeleteProduct}
                  closeModal={closeModal}
                  message={
                    "If you click the confirm button the data will removed permanently"
                  }
                  data={deleteProduct}
                ></ConfirmDeleteUser>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
