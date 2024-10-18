import { useEffect } from 'react';
import { useOpportunities as useOpportunitiesContext } from '../contexts/OpportunityContext';
import { Opportunity } from '../types';

// This is a mock function to simulate fetching data from an API
const fetchOpportunities = async (): Promise<Opportunity[]> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', symbol: 'AAPL', company: 'Apple Inc.', price: 150.25, change: 2.5, description: 'Technology company that designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories.' },
        { id: '2', symbol: 'GOOGL', company: 'Alphabet Inc.', price: 2750.80, change: -1.2, description: 'Multinational technology company focusing on search engine technology, cloud computing, software, and hardware.' },
        { id: '3', symbol: 'MSFT', company: 'Microsoft Corporation', price: 305.15, change: 0.8, description: 'Technology corporation that develops, manufactures, and sells computer software, consumer electronics, and personal computers.' },
        { id: '4', symbol: 'AMZN', company: 'Amazon.com, Inc.', price: 3380.50, change: 1.5, description: 'Multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.' },
        { id: '5', symbol: 'FB', company: 'Meta Platforms, Inc.', price: 330.75, change: -0.5, description: 'Technology company that focuses on social networking services and products.' },
      ]);
    }, 1000); // Simulate network delay
  });
};

export const useOpportunities = () => {
  const { opportunities, setOpportunities } = useOpportunitiesContext();

  useEffect(() => {
    const loadOpportunities = async () => {
      const fetchedOpportunities = await fetchOpportunities();
      setOpportunities(fetchedOpportunities);
    };

    if (opportunities.length === 0) {
      loadOpportunities();
    }
  }, [opportunities.length, setOpportunities]);

  return { opportunities };
};