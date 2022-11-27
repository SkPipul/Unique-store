import React from "react";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-booking-side" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-booking-side" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
