import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import swal from "sweetalert";
import Loading from "../../../Loading/Loading";
import ConfirmDeleteUser from "../ConfirmDeleteUser/ConfirmDeleteUser";

const AllUsers = () => {
  const [deleteUser, setDeleteUser] = useState(null);

  const closeModal = () => {
    setDeleteUser(null);
  };

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });

  const handleDeleteUser = (user) => {
    // console.log(user);
    fetch(`http://localhost:5000/users/user/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          swal("Yahoooo!", "user deleted succefully", "success");
        }
      });
  };

  const handleVerify = ( user ) => {
    fetch(`http://localhost:5000/myproducts${user._id}`,{
      method: 'PUT'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-3/4 mx-auto">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Verify</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <th>{i + 1}</th>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {user?.role === "seller"&& user?.verify !== true && (
                  <button onClick={() => handleVerify(user)} className="btn btn-sm bg-green-500 border-none">
                    Verify
                  </button>
                )}
              </td>
              <td>
                  {
                    user?.role !== 'admin' &&
                    <label
                    onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal"
                    className="btn btn-sm bg-red-500 border-none"
                  >
                    Delete
                  </label>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {
          deleteUser && <ConfirmDeleteUser
          title={'Are you sure you want to delete this user?'}
          deleteAction={handleDeleteUser}
          closeModal={closeModal}
          message={'If you click the confirm button the data will removed permanently'}
          data={deleteUser}
          ></ConfirmDeleteUser>
        }
      </div>
    </div>
  );
};

export default AllUsers;
