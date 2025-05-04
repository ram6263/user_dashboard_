import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Page/Login.jsx'
import Dashboard from './Page/Dashboard.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
