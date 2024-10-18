import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Briefcase, Settings, Home, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebaseService';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">StockSense</h1>
        </div>
        <ul className="mt-6">
          <NavItem to="/" icon={<Home />} text="Dashboard" />
          <NavItem to="/opportunities" icon={<Briefcase />} text="Opportunities" />
          <NavItem to="/analysis" icon={<BarChart2 />} text="Analysis" />
          <NavItem to="/settings" icon={<Settings />} text="Settings" />
        </ul>
        {currentUser && (
          <div className="mt-auto p-4">
            <button onClick={handleSignOut} className="flex items-center text-gray-700 hover:bg-gray-200 w-full px-4 py-2 rounded">
              <LogOut className="mr-2" />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </nav>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <li className="mb-2">
    <Link to={to} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);