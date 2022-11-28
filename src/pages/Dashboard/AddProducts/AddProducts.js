import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AddProducts = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const imageKey = process.env.REACT_APP_imgbb_key;
  const { user } = useContext(AuthContext)

    const handleAddProduct = data => {
      const name = data.name;
      let categoryId = "";
        if(name.toLowerCase().includes('samsung')){
            categoryId = "1";
        }
        else if(name.toLowerCase().includes('iphone')){
            categoryId = "2";
        }

        else if(name.toLowerCase().includes('oneplus')){
            categoryId = "3";
        }
        
        else{
            return swal("Ops!","This Brand is not allowed","error")
        }

      const img = data.img[0];
      const formData = new FormData();
      formData.append('image', img);
      const url = `https://api.imgbb.com/1/upload?key=${imageKey}`
      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imgData => {
        if(imgData.success){
          console.log(imgData.data.url);
          const product = {
            categoryId,
            email: user.email,
            name: data.name,
            img: imgData.data.url,
            location: data.location,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            date: data.date,
            used: data.used,
            sellersName: data.sellersName,
          }
          fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(product)
          })
          .then(res => res.json())
          .then(result => {
            console.log(result);
            swal("Good job","Product Added Successfully","success");
            navigate('/dashboard/newproducts')
          })
        }
      })
    }

  return (
    <div className="flex justify-center items-center mb-10">
      <form onSubmit={handleSubmit(handleAddProduct)} className="grid grid-cols-1 mt-2 w-3/4">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email"
              className="input w-full input-bordered"
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text">Product</span>
            </label>
            <input
              {...register("name", {
                required: "Name is Required"
              })}
              type="text"
              placeholder="Product name"
              className="input w-full input-bordered"
              />
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text">Original Price</span>
            </label>
            <input
              {...register("originalPrice", {
                required: "Price is Required"
            })}
              type="text"
              placeholder="Original price"
              className="input w-full input-bordered"
            />
            {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              {...register("resalePrice", {
                required: "Price is Required"
            })}
              type="text"
              placeholder="Resale price"
              className="input w-full input-bordered"
            />
            {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text">Image</span>
            </label>
            <input
              {...register("img", {
                required: "Image is Required"
            })}
              type="file"
              placeholder="Image url"
              className="input w-full input-bordered"
            />
            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location", {
                required: "Location is Required"
            })}
              type="text"
              placeholder="Your location"
              className="input w-full input-bordered"
            />
            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text">Date</span>
            </label>
            <input
              {...register("date", {
                required: "Date is Required"
            })}
              type="text"
              placeholder="Date: date/month/year"
              className="input w-full input-bordered"
            />
            {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text">Used</span>
            </label>
            <input
              {...register("used", {
                required: "Used product is Required"
            })}
              type="text"
              placeholder="Used"
              className="input w-full input-bordered"
            />
            {errors.used && <p className='text-red-500'>{errors.used.message}</p>}
            <label className="label">
              {" "}
              <span className="label-text">Seller Name</span>
            </label>
            <input
              {...register("sellersName", {
                required: "Name is Required"
            })}
              type="text"
              placeholder="Name"
              className="input w-full input-bordered"
            />
            {errors.sellersName && <p className='text-red-500'>{errors.sellersName.message}</p>}
            <br />
            <input
              className="btn btn-outline w-1/4 mx-auto"
              type="submit"
              value="Submit"
            />
          </form>
    </div>
  );
};

export default AddProducts;
