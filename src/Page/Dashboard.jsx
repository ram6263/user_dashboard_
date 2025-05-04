import React, { useState } from 'react'
import Sidebar from '../component/Sidebar.jsx'
import Header from '../component/Header.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Users from './Users.jsx'
import Settings from './Settings.jsx'
import Overview from './Overview.jsx'

const Dashboard = () => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex h-screen '>
    <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}  onToggle={() => setSidebarOpen(!sidebarOpen)}/>
      <div className='flex-1 flex flex-col'>
        <Header/>
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Routes>
            {/* Default route */}
            <Route index element={<Navigate to="overview" />} />
            <Route path="overview" element={<Overview />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
      </main>
      </div>
      
    </div>
  )
}

export default Dashboard
