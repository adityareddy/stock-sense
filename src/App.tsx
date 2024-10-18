import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Opportunities } from './pages/Opportunities';
import { Analysis } from './pages/Analysis';
import { Settings } from './pages/Settings';
import { AlertProvider } from './contexts/AlertContext';
import { OpportunityProvider } from './contexts/OpportunityContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AlertProvider>
          <OpportunityProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/opportunities" element={<Opportunities />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Layout>
          </OpportunityProvider>
        </AlertProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;