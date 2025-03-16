import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 50, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 5000, revenue: 9800 },
  { name: 'Apr', sales: 4780, revenue: 3908 },
  { name: 'May', sales: 5890, revenue: 4800 },
  { name: 'Jun', sales: 4390, revenue: 3800 },
];

const Dashboard = () => {
  return (
    <div className='w-full h-full p-6 flex flex-col items-center gap-6'>
      <h1 className='text-3xl font-bold'>Welcome Back</h1>
      
      <div className='w-full flex flex-wrap justify-center gap-6'>
        {/* Line Chart */}
        <div className='w-[45%] bg-white p-4 shadow-lg rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Sales Overview</h2>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Line type='monotone' dataKey='sales' stroke='#8884d8' strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Bar Chart */}
        <div className='w-[45%] bg-white p-4 shadow-lg rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Revenue Report</h2>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='revenue' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
