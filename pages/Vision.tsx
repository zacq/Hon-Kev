import React from 'react';
import { POLICIES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-campaign-primary text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold sm:text-5xl">Vision & Policy</h1>
          <p className="mt-4 text-xl text-green-100 max-w-2xl mx-auto">
            The 5-Point Policy Plan is a blueprint for national economic transformation and sustainable development.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {POLICIES.map((policy) => {
            // Dynamically resolve icon
            const IconComponent = (LucideIcons as any)[policy.iconName] || LucideIcons.FileText;

            return (
              <div key={policy.id} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-campaign-primary text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{policy.policyArea}</h3>
                  <div className="text-campaign-primary font-medium text-sm mb-2">Focus: {policy.targetAudience}</div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {policy.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {policy.keyInitiatives.map(item => (
                      <span key={item} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action - Download Manifesto */}
        <div className="mt-20 bg-gray-100 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Read the Full Manifesto</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Dive deeper into the details. Download the complete 50-page policy document outlining budget allocations and implementation timelines.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-campaign-secondary hover:bg-gray-800">
            <LucideIcons.Download className="mr-2 h-5 w-5" /> Download PDF (5MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vision;