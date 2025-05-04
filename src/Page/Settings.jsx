import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Settings = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    toast.success('Profile updated successfully!');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Settings;
