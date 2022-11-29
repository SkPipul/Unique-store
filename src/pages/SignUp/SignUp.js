import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, setLoading } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    // console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        swal("Good","User Created Successfully.", "success");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            const userData = {
              userName: user.displayName,
              email: user.email,
              role: data.role
            }
            console.log(userData);
            fetch('https://unique-store-server.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(userData)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              setLoading(false)
              navigate("/");
            })
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
          <label className="label">
              {" "}
              <span className="label-text">Option</span>
            </label>
            <select {...register("role", {
                required: true,
              })} className="select select-bordered w-full max-w-xs">
              <option value='buyer'>buyer</option>
              <option value="seller">seller</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-primary w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="mt-3">
          Already have an account{" "}
          <Link className="text-orange-500" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
