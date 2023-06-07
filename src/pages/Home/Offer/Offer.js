import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { MdLiveHelp } from "react-icons/md";

const Offer = () => {
  return (
    <div className="bg-gray-200 py-10 mb-20">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center justify-center cursor-pointer">
          <FaShippingFast className="text-4xl mr-5"></FaShippingFast>
          <span>
            <h2 className="text-lg font-bold hover:text-red-600">FREE SHIPPING</h2>
            <p className="text-gray-400">For orders over $50</p>
          </span>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <CiDiscount1 className="text-4xl mr-5"></CiDiscount1>
          <span>
            <h2 className="text-lg font-bold hover:text-red-600">OFFICIAL DISCOUNTS</h2>
            <p className="text-gray-400">Save Big on next product</p>
          </span>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <MdLiveHelp className="text-4xl mr-5"></MdLiveHelp>
          <span>
            <h2 className="text-lg font-bold hover:text-red-600">24/7 HELPLINE</h2>
            <p className="text-gray-400">Care till the end</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Offer;
