import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2023-01-01', AAPL: 4000, GOOGL: 2400, MSFT: 2400 },
  { date: '2023-02-01', AAPL: 3000, GOOGL: 1398, MSFT: 2210 },
  { date: '2023-03-01', AAPL: 2000, GOOGL: 9800, MSFT: 2290 },
  { date: '2023-04-01', AAPL: 2780, GOOGL: 3908, MSFT: 2000 },
  { date: '2023-05-01', AAPL: 1890, GOOGL: 4800, MSFT: 2181 },
  { date: '2023-06-01', AAPL: 2390, GOOGL: 3800, MSFT: 2500 },
  { date: '2023-07-01', AAPL: 3490, GOOGL: 4300, MSFT: 2100 },
];

export const Analysis: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Market Analysis</h2>
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Stock Performance Comparison</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="AAPL" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="GOOGL" stroke="#82ca9d" />
            <Line type="monotone" dataKey="MSFT" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Insights</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span>Tech sector showing strong growth</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              <span>Energy stocks facing volatility</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <span>Retail sector underperforming</span>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Economic Indicators</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">GDP Growth Rate</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <span className="text-sm text-gray-600">3.5%</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Inflation Rate</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-sm text-gray-600">2.1%</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Unemployment Rate</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <span className="text-sm text-gray-600">4.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};