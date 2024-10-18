import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Opportunity } from '../types';

interface OpportunityContextType {
  opportunities: Opportunity[];
  setOpportunities: React.Dispatch<React.SetStateAction<Opportunity[]>>;
  addOpportunity: (opportunity: Opportunity) => void;
  removeOpportunity: (id: string) => void;
  updateOpportunity: (id: string, updates: Partial<Opportunity>) => void;
}

const OpportunityContext = createContext<OpportunityContextType | undefined>(undefined);

export const OpportunityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  const addOpportunity = (opportunity: Opportunity) => {
    setOpportunities(prev => {
      const exists = prev.some(opp => opp.id === opportunity.id);
      if (!exists) {
        return [...prev, opportunity];
      }
      return prev;
    });
  };

  const removeOpportunity = (id: string) => {
    setOpportunities(prev => prev.filter(opp => opp.id !== id));
  };

  const updateOpportunity = (id: string, updates: Partial<Opportunity>) => {
    setOpportunities(prev => prev.map(opp => opp.id === id ? { ...opp, ...updates } : opp));
  };

  return (
    <OpportunityContext.Provider value={{ opportunities, setOpportunities, addOpportunity, removeOpportunity, updateOpportunity }}>
      {children}
    </OpportunityContext.Provider>
  );
};

export const useOpportunities = () => {
  const context = useContext(OpportunityContext);
  if (context === undefined) {
    throw new Error('useOpportunities must be used within an OpportunityProvider');
  }
  return context;
};