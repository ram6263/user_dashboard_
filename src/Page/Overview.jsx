import React from 'react'
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const data=[
    { name: "Jan", value: 240 },
    { name: "Feb", value: 320 },
    { name: "Mar", value: 300 },
];

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div><h3>Total Users</h3><BarChart width={300} height={200} data={data}><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="value" fill="#8884d8"/></BarChart></div>
      <div><h3>Active Sessions</h3><LineChart width={300} height={200} data={data}><XAxis dataKey="name"/><YAxis/><Tooltip/><Line type="monotone" dataKey="value" stroke="#82ca9d" /></LineChart></div>
      <div><h3>Feedback Score</h3><PieChart width={300} height={200}><Pie data={data} dataKey="value" nameKey="name" outerRadius={80} fill="#ffc658" label /></PieChart></div>
      <div><h3>Growth</h3><BarChart width={300} height={200} data={data}><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="value" fill="#00C49F"/></BarChart></div>
      <div><h3>Retention</h3><LineChart width={300} height={200} data={data}><XAxis dataKey="name"/><YAxis/><Tooltip/><Line type="monotone" dataKey="value" stroke="#ff7300" /></LineChart></div>
    </div>
  )
}

export default Overview
