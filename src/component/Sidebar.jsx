import React from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, onToggle }) => {
  return (
    <>
      
      <button
        onClick={onToggle}
        className="md:hidden p-2 bg-gray-300 fixed top-4 left-0 z-20"
      >
        <Menu className="w-6 h-6" />
      </button>

      
      <div
        className={`fixed top-0 left-0 h-full w-64 p-4 bg-gray-400 z-10 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="flex justify-between items-center mb-6 md:mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          
          <button onClick={onClose} className="md:hidden text-xl">
            <X />
          </button>
        </div>

        <nav className="flex flex-col space-y-4">
          <Link to="/dashboard/overview" className="hover:text-green-400">Overview</Link>
          <Link to="/dashboard/users" className="hover:text-green-400">Users</Link>
          <Link to="/dashboard/settings" className="hover:text-green-400">Settings</Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
