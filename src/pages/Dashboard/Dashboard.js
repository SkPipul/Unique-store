import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: currentUser } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/users/user/${user?.email}`).then((res) =>
        res.json()
      ),
  });

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-booking-side" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h2 className="text-3xl font-mono font-bold text-center mt-5">Welcome to the Dashboard</h2>
          <p className="text-center mb-5">A seller can add product and a buyer can booked and buy product</p>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-booking-side" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">

            {
              currentUser?.role === 'admin' &&
              <li>
              <Link to="/dashboard/allusers">All Users</Link>
            </li>
            }
            {
              currentUser?.role === 'seller' &&
              <>
              <li>
              <Link to="/dashboard/addproducts">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/newproducts">My Product</Link>
            </li>
              </>
            }
            {
              currentUser?.role === 'buyer' &&
              <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            }
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
