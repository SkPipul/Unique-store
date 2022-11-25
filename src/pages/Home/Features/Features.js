import React from "react";
import { FaMobileAlt } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const Features = () => {
  return (
    <div className="grid gap-2 ml-12 my-20 md:grid-cols-2 lg:grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
          <FaMobileAlt className="text-6xl"></FaMobileAlt>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Mobile</h2>
          <p>We provide used/second hand mobile with reasonable price</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
          <GiTakeMyMoney className="text-6xl"></GiTakeMyMoney>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Payment</h2>
          <p>You can pay your money by Bkash and Nagad</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
          <VscWorkspaceTrusted className='text-6xl'></VscWorkspaceTrusted>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Trust
          </h2>
          <p>We give our best service to our customer and you can trust us for sure</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
