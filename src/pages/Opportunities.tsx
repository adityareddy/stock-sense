import React, { useState } from 'react';
import { useOpportunities } from '../hooks/useOpportunities';
import { Opportunity } from '../types';

export const Opportunities: React.FC = () => {
  const { opportunities } = useOpportunities();
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Investment Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {opportunities.map((opportunity) => (
                  <tr key={opportunity.id} onClick={() => setSelectedOpportunity(opportunity)} className="cursor-pointer hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{opportunity.symbol}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{opportunity.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${opportunity.price.toFixed(2)}</td>
                    <td className={`px-6 py-4 whitespace-nowrap ${opportunity.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {opportunity.change >= 0 ? '+' : ''}{opportunity.change.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {selectedOpportunity && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{selectedOpportunity.company}</h3>
              <p className="text-gray-600 mb-2">Symbol: {selectedOpportunity.symbol}</p>
              <p className="text-gray-600 mb-2">Price: ${selectedOpportunity.price.toFixed(2)}</p>
              <p className={`mb-2 ${selectedOpportunity.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                Change: {selectedOpportunity.change >= 0 ? '+' : ''}{selectedOpportunity.change.toFixed(2)}%
              </p>
              <p className="text-gray-600 mb-4">{selectedOpportunity.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add to Watchlist
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};