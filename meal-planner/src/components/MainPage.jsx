import React, { useState } from 'react';
import { User, Package, Calendar, Heart, ChefHat, Bell, Settings } from 'lucide-react';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Ingredients from './Ingredients';
import Plans from './Plans';
import Favorites from './Favorites';

const MealPlannerApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: ChefHat },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'ingredients', label: 'Ingredients', icon: Package },
    { id: 'plans', label: 'Meal Plans', icon: Calendar },
    { id: 'favorites', label: 'Favourites', icon: Heart },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      case 'ingredients':
        return <Ingredients />;
      case 'plans':
        return <Plans />;
      case 'favorites':
        return <Favorites />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                MealCraft
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors duration-200 border border-gray-200">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors duration-200 border border-gray-200">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-2">
            <nav className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-1 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 bg-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlannerApp;