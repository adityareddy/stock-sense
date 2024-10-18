import React, { useState, useEffect } from 'react';
import { fetchDailyTimeSeries, fetchCompanyOverview } from '../services/alphaVantageService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StockAnalysisProps {
  symbol: string;
}

export const StockAnalysis: React.FC<StockAnalysisProps> = ({ symbol }) => {
  const [timeSeriesData, setTimeSeriesData] = useState<any[]>([]);
  const [companyOverview, setCompanyOverview] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const timeSeries = await fetchDailyTimeSeries(symbol);
      const overview = await fetchCompanyOverview(symbol);
      
      const formattedData = Object.entries(timeSeries).map(([date, values]: [string, any]) => ({
        date,
        close: parseFloat(values['4. close']),
      })).reverse();

      setTimeSeriesData(formattedData);
      setCompanyOverview(overview);
    };

    fetchData();
  }, [symbol]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{symbol} Analysis</h2>
      {companyOverview && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{companyOverview.Name}</h3>
          <p>{companyOverview.Description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <strong>Sector:</strong> {companyOverview.Sector}
            </div>
            <div>
              <strong>Industry:</strong> {companyOverview.Industry}
            </div>
            <div>
              <strong>Market Cap:</strong> {companyOverview.MarketCapitalization}
            </div>
            <div>
              <strong>P/E Ratio:</strong> {companyOverview.PERatio}
            </div>
          </div>
        </div>
      )}
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={timeSeriesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="close" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};