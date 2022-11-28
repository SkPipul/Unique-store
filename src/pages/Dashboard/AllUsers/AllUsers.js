import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
        .then(res => res.json())
    })
    // console.log(users);
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) => <tr key={user._id}>
            <th>{i + 1}</th>
            <td>{user.userName}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default AllUsers;