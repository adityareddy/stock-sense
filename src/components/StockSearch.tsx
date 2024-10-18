import React, { useState } from 'react';
import { searchSymbols } from '../services/alphaVantageService';

interface StockSearchProps {
  onSelectStock: (symbol: string) => void;
}

export const StockSearch: React.FC<StockSearchProps> = ({ onSelectStock }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (searchTerm) {
      const results = await searchSymbols(searchTerm);
      setSearchResults(results);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Search for a stock"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
      {searchResults.length > 0 && (
        <ul className="mt-2">
          {searchResults.map((result) => (
            <li
              key={result['1. symbol']}
              onClick={() => onSelectStock(result['1. symbol'])}
              className="cursor-pointer hover:bg-gray-100 p-2"
            >
              {result['1. symbol']} - {result['2. name']}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};