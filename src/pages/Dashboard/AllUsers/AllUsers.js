import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Loading/Loading';

const AllUsers = () => {
    const {data: users = [], isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
        .then(res => res.json())
    })
    if(isLoading){
      return <Loading></Loading>
    }
    console.log(users);
    return (
        <div className="overflow-x-auto">
  <table className="table w-3/4">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) => <tr key={user._id}>
            <th>{i + 1}</th>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default AllUsers;