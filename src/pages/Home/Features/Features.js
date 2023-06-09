import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Features = () => {
  return (
    <div className="bg-gray-200 my-20 py-20">
      <h2 className='text-4xl font-bold text-center'>WELCOME TO PHONO SUPPORT. WE'RE HERE TO HELP.</h2>
            <p className='text-gray-400 font-mono text-2xl text-center mt-4 mb-10'>ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</p>
      <div className="">
        <div className="grid gap-5 px-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full rounded-md bg-base-100 shadow-xl mx-auto">
            <figure className="pt-10">
              <FaMobileAlt className="text-6xl mx-auto"></FaMobileAlt>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Mobile</h2>
              <p>We provide used/second hand mobile with reasonable price</p>
            </div>
          </div>
          <div className="w-full rounded-md bg-base-100 shadow-xl mx-auto">
            <figure className="pt-10">
              <GiTakeMyMoney className="text-6xl mx-auto"></GiTakeMyMoney>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Payment</h2>
              <p>You can pay your money by Bkash and Nagad</p>
            </div>
          </div>
          <div className="w-full rounded-md bg-base-100 shadow-xl mx-auto">
            <figure className="pt-10">
              <VscWorkspaceTrusted className="text-6xl mx-auto"></VscWorkspaceTrusted>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Trust</h2>
              <p>
                We give our best service to our customer and you can trust us
                for sure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
