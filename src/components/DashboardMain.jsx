import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Settings, Server, Activity, AlertTriangle, CheckCircle, Clock, Info, Users, RefreshCw } from 'lucide-react';

// Sample data
const serverData = [
  { name: 'Server 1', status: 'online', latency: 15, uptime: 99.9, users: 120, region: 'us-west' },
  { name: 'Server 2', status: 'online', latency: 22, uptime: 99.7, users: 85, region: 'us-east' },
  { name: 'Server 3', status: 'warning', latency: 38, uptime: 98.5, users: 210, region: 'eu-central' },
  { name: 'Server 4', status: 'offline', latency: 0, uptime: 0, users: 0, region: 'ap-east' },
  { name: 'Server 5', status: 'online', latency: 18, uptime: 99.8, users: 156, region: 'us-central' },
];

const performanceData = [
  { name: '00:00', latency: 18 },
  { name: '02:00', latency: 15 },
  { name: '04:00', latency: 16 },
  { name: '06:00', latency: 14 },
  { name: '08:00', latency: 22 },
  { name: '10:00', latency: 24 },
  { name: '12:00', latency: 28 },
  { name: '14:00', latency: 32 },
  { name: '16:00', latency: 27 },
  { name: '18:00', latency: 22 },
  { name: '20:00', latency: 19 },
  { name: '22:00', latency: 17 },
];

const userActivityData = [
  { name: '00:00', users: 78 },
  { name: '02:00', users: 52 },
  { name: '04:00', users: 41 },
  { name: '06:00', users: 67 },
  { name: '08:00', users: 132 },
  { name: '10:00', users: 198 },
  { name: '12:00', users: 221 },
  { name: '14:00', users: 234 },
  { name: '16:00', users: 247 },
  { name: '18:00', users: 186 },
  { name: '20:00', users: 157 },
  { name: '22:00', users: 113 },
];

const configStatusData = [
  { name: 'Synced', value: 18 },
  { name: 'Out of Sync', value: 3 },
];

const COLORS = ['#4ade80', '#f87171'];

const DashboardMain = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeView, setActiveView] = useState('overview');
  
  const handleRefresh = () => {
    setLastUpdated(new Date());
    // In a real application, this would fetch fresh data
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">MCPToolkits</h1>
            <nav className="ml-8 hidden md:flex space-x-4">
              <button 
                onClick={() => setActiveView('overview')}
                className={`px-3 py-1 rounded-md ${activeView === 'overview' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveView('servers')}
                className={`px-3 py-1 rounded-md ${activeView === 'servers' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                Servers
              </button>
              <button 
                onClick={() => setActiveView('configuration')}
                className={`px-3 py-1 rounded-md ${activeView === 'configuration' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                Configuration
              </button>
              <button 
                onClick={() => setActiveView('analytics')}
                className={`px-3 py-1 rounded-md ${activeView === 'analytics' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                Analytics
              </button>
            </nav>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-4">Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <button 
              onClick={handleRefresh}
              className="p-2 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-gray-100"
            >
              <RefreshCw size={20} />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-gray-100 ml-2">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Server size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Servers</p>
                <p className="text-2xl font-semibold text-gray-900">4</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Total: 5</span>
                <span className="text-sm font-medium text-green-600">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <AlertTriangle size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Warnings</p>
                <p className="text-2xl font-semibold text-gray-900">3</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Configuration issues</span>
                <span>1</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Performance warnings</span>
                <span>2</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                <Activity size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Avg. Latency</p>
                <p className="text-2xl font-semibold text-gray-900">23ms</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Last hour</span>
                <span className="font-medium text-green-600">? 8%</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>24h range</span>
                <span>14ms - 32ms</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Users size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-2xl font-semibold text-gray-900">571</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Peak today</span>
                <span>247</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>vs. yesterday</span>
                <span className="font-medium text-green-600">? 12%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Server Status */}
          <div className="bg-white rounded-lg shadow col-span-3 lg:col-span-2">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Server size={20} className="mr-2" />
                Server Status
              </h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Server</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latency</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uptime</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {serverData.map((server, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{server.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            server.status === 'online' ? 'bg-green-100 text-green-800' :
                            server.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {server.status === 'online' && <CheckCircle size={12} className="mr-1" />}
                            {server.status === 'warning' && <AlertTriangle size={12} className="mr-1" />}
                            {server.status === 'offline' && <Info size={12} className="mr-1" />}
                            {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {server.status !== 'offline' ? `${server.latency}ms` : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {server.status !== 'offline' ? `${server.uptime}%` : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{server.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Configuration Status */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Settings size={20} className="mr-2" />
                Configuration Status
              </h3>
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={configStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {configStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 w-full">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-700">Synced</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">18</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm text-gray-700">Out of Sync</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">3</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
                  Sync All Configurations
                </button>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white rounded-lg shadow col-span-3 lg:col-span-2">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Activity size={20} className="mr-2" />
                Performance (24h)
              </h3>
            </div>
            <div className="p-6">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="latency" stroke="#6366f1" activeDot={{ r: 8 }} name="Latency (ms)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* User Activity */}
          <div className="bg-white rounded-lg shadow col-span-3 lg:col-span-1">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Users size={20} className="mr-2" />
                User Activity (24h)
              </h3>
            </div>
            <div className="p-6">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={userActivityData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#6366f1" name="Active Users" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <Clock size={20} className="mr-2" />
              Recent Activity
            </h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-900">Server 2 - Configuration synced successfully</p>
                  <p className="text-xs text-gray-500">20 minutes ago</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <AlertTriangle size={16} className="text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-900">Server 3 - High latency warning (38ms)</p>
                  <p className="text-xs text-gray-500">45 minutes ago</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <Info size={16} className="text-red-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-900">Server 4 - Connection lost</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Settings size={16} className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-900">Configuration update - Security parameters updated</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">View all activity</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardMain;