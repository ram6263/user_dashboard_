import React, { useState } from 'react';

const Users = () => {
  const [user, setUser] = useState([
    { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { name: 'Bob', email: 'bob@example.com', role: 'User' },
  ]);

  return (
    <div className="w-full overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <table className="min-w-full bg-white rounded shadow-sm border border-gray-200">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm text-gray-600">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u, i) => (
            <tr key={i} className="border-t hover:bg-gray-50 text-sm">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
