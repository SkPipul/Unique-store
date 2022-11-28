import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Loading from "../../Loading/Loading";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: currentUser, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/users/user/${user?.email}`).then((res) =>
        res.json()
      ),
  });
  // if(isLoading){
  //   return <Loading></Loading>
  // }
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-booking-side" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h2>Welcome guys</h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-booking-side" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {currentUser?.role === "admin" ? (
              <li>
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
            ) : (
              <>
                {currentUser?.role === "seller" ? (
                  <>
                    <li>
                      <Link to="/dashboard/addproducts">Add Product</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/newproducts">New Product</Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/dashboard/myorders">My Orders</Link>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
