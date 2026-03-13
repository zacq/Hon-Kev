import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ACHIEVEMENTS, IMPACT_STATS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl">The Kiharu Model</h1>
          <p className="mt-4 text-xl text-gray-500">Transforming the Grassroots. Leading with Results.</p>
        </div>

        {/* Data Viz Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact Distribution</h3>
              <p className="text-gray-600 mb-6">
                Our resources and legislative efforts have been strategically allocated to address the most critical needs of the constituency.
              </p>
              <ul className="space-y-4">
                {IMPACT_STATS.map((stat) => (
                  <li key={stat.name} className="flex items-center justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">{stat.name}</span>
                    <span className="text-campaign-primary font-bold">{stat.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={IMPACT_STATS}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {IMPACT_STATS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-campaign-primary">
                  {item.category}
                </span>
                <span className="text-gray-400 text-sm">{item.dateCompleted}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.projectName}</h3>
              <div className="text-gray-500 text-sm mb-2">{item.location}</div>
              <div className="text-2xl font-bold text-campaign-secondary mb-3">
                {item.impactMetrics}
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;