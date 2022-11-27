import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Loading from "../../../Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(`http://localhost:5000/bookings?email=${user?.email}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4">My Orders</h2>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table w-3/4 mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Original Price</th>
              <th>Resale Price</th>
              <th>User Name</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={booking.image}
                      alt=""
                    />
                  </div>
                </div>
                <td>{booking.productName}</td>
                <td>${booking.originalPrice}</td>
                <td>${booking.resalePrice}</td>
                <td>{booking.name}</td>
                <td>
                  <button className="btn btn-sm btn-outline">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
