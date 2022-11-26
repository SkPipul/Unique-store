import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Product = ({ product }) => {
  const { user } = useContext(AuthContext);
  const [modalData, setModalData] = useState({});
//   const handleBook = (id) => {
//     // console.log(id);
//     fetch(`http://localhost:5000/products/category/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setModalData(data);
//         // console.log(data);
//       });
//   };
  console.log(modalData);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const phone = form.phone.value;

    const booking = {
        productName,
        originalPrice,
        resalePrice,
        name,
        email,
        location,
        phone
    }

    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

  }

  return (
    <div>
      <div className="hero bg-base-200 w-3/4 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={product.img}
            alt=""
            className="max-w-xs rounded-lg shadow-2xl ml-10"
          />
          <div className="">
            <h1 className="text-4xl font-bold text-center mb-3">
              {product.name}
            </h1>
            <p className="text-xl font-bold mb-2">
              Original Price{" "}
              <span className="text-orange-500">${product.originalPrice}</span>
            </p>
            <p className="text-xl font-bold mb-2">
              Resale Price{" "}
              <span className="text-orange-500">${product.resalePrice}</span>
            </p>
            <p className="font-semibold mb-2">Location: {product.location}</p>
            <p className="font-semibold mb-2">Posted date: {product.date}</p>
            <p className="font-semibold mb-4">Used time: {product.used} year</p>
            <label
              onClick={() => setModalData(product)}
              htmlFor="my-booking"
              className="btn btn-outline"
            >
              Book Now
            </label>
            {/* <button onClick={() => handleBook(product._id)} className="btn">Book Now</button> */}
          </div>
        </div>
      </div>
      {/* Booking Modal */}
      <input type="checkbox" id="my-booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData({})}
            htmlFor="my-booking"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{modalData.name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 mt-2">
            <label className="label">
              {" "}
              <span className="label-text">Product</span>
            </label>
            <input
              name="productName"
              type="text"
              defaultValue={modalData.name}
              disabled
              placeholder="Product name"
              className="input w-full input-bordered"
            />
            <label className="label">
              {" "}
              <span className="label-text">Original Price</span>
            </label>
            <input
              name="originalPrice"
              type="text"
              defaultValue={modalData.originalPrice}
              disabled
              placeholder="Original price"
              className="input w-full input-bordered"
            />
            <label className="label">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              name="resalePrice"
              type="text"
              defaultValue={modalData.resalePrice}
              disabled
              placeholder="Resale price"
              className="input w-full input-bordered"
            />
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <label className="label">
              {" "}
              <span className="label-text">Meeting location</span>
            </label>
            <input
              name="location"
              type="text"
              placeholder="Your location"
              className="input w-full input-bordered"
              required
            />
            <label className="label">
              {" "}
              <span className="label-text">Phone number</span>
            </label>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
              required
            />
            <br />
            <input
              className="btn btn-outline w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
