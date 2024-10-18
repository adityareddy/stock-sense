import axios from 'axios';

const API_KEY = '5EUXNMOO5PL1TM2K'; // Replace with your actual Alpha Vantage API key
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchDailyTimeSeries = async (symbol: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        apikey: API_KEY,
      },
    });
    return response.data['Time Series (Daily)'];
  } catch (error) {
    console.error('Error fetching daily time series:', error);
    throw error;
  }
};

export const fetchCompanyOverview = async (symbol: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        function: 'OVERVIEW',
        symbol,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching company overview:', error);
    throw error;
  }
};

export const searchSymbols = async (keywords: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords,
        apikey: API_KEY,
      },
    });
    return response.data.bestMatches;
  } catch (error) {
    console.error('Error searching symbols:', error);
    throw error;
  }
};