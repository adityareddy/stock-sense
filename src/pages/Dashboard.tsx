import React, { useState } from 'react';
import { StockSearch } from '../components/StockSearch';
import { StockAnalysis } from '../components/StockAnalysis';
import { useAuth } from '../contexts/AuthContext';

export const Dashboard: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState<string | null>(null);
  const { currentUser } = useAuth();

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Stock Market Research Dashboard</h2>
      {currentUser ? (
        <>
          <p className="mb-4">Welcome, {currentUser.email}!</p>
          <StockSearch onSelectStock={(symbol) => setSelectedStock(symbol)} />
          {selectedStock && <StockAnalysis symbol={selectedStock} />}
        </>
      ) : (
        <p>Please sign in to access the dashboard.</p>
      )}
    </div>
  );
};