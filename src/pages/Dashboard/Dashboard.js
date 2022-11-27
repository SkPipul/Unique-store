import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
      <input id="my-booking-side" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
      <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-booking-side" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link to='/dashboard/myorders'>My Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/addproducts'>Add Product</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
