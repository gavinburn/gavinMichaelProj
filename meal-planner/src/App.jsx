import React, { useState } from 'react';
import { User, Package, Calendar, Heart, ChefHat, Plus, Search, Bell, Settings, Zap, Clock, Star } from 'lucide-react';

const MealPlannerApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: ChefHat },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'ingredients', label: 'Ingredients', icon: Package },
    { id: 'plans', label: 'Meal Plans', icon: Calendar },
    { id: 'favorites', label: 'Favourites', icon: Heart },
  ];

  const mealPlans = [
    { id: 1, name: 'Mediterranean Week', meals: 21, calories: 1800, time: '30 min', image: '🥗' },
    { id: 2, name: 'High Protein', meals: 14, calories: 2200, time: '45 min', image: '🥩' },
    { id: 3, name: 'Vegetarian Delight', meals: 18, calories: 1600, time: '25 min', image: '🥕' },
  ];

  const favorites = [
    { id: 1, name: 'Grilled Salmon', rating: 4.8, time: '20 min', image: '🐟' },
    { id: 2, name: 'Quinoa Buddha Bowl', rating: 4.9, time: '15 min', image: '🥙' },
    { id: 3, name: 'Chicken Teriyaki', rating: 4.7, time: '35 min', image: '🍗' },
  ];

  const ingredients = [
    { id: 1, name: 'Salmon Fillets', amount: '4 pieces', expiry: '2 days', status: 'fresh' },
    { id: 2, name: 'Quinoa', amount: '500g', expiry: '30 days', status: 'good' },
    { id: 3, name: 'Spinach', amount: '200g', expiry: '1 day', status: 'expiring' },
    { id: 4, name: 'Chicken Breast', amount: '1kg', expiry: '5 days', status: 'fresh' },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-xl text-white/90">Ready to plan some delicious meals?</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">7 day streak</span>
            </div>
            <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">This Week</p>
              <p className="text-2xl font-bold text-gray-800">21 Meals</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Fresh Ingredients</p>
              <p className="text-2xl font-bold text-gray-800">12 Items</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Favourites</p>
              <p className="text-2xl font-bold text-gray-800">8 Recipes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Meal Plans */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Meal Plans</h2>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mealPlans.map((plan) => (
            <div key={plan.id} className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
              <div className="text-4xl mb-3">{plan.image}</div>
              <h3 className="font-bold text-gray-800 mb-2">{plan.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{plan.meals} meals • {plan.calories} cal avg</p>
                <p className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {plan.time} prep time
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            S
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Sarah Johnson</h2>
            <p className="text-gray-600">Premium Member since January 2024</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Premium</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Dietary Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Pescatarian</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Gluten-Free</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Low Sodium</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Goals</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Daily Calories</span>
                <span className="font-semibold text-gray-800">1,800</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Protein Goal</span>
                <span className="font-semibold text-gray-800">120g</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Meal Prep Days</span>
                <span className="font-semibold text-gray-800">Sunday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIngredients = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Ingredients</h2>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Ingredient
          </button>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search ingredients..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{ingredient.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  ingredient.status === 'fresh' ? 'bg-green-100 text-green-800' :
                  ingredient.status === 'good' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {ingredient.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Amount: {ingredient.amount}</p>
              <p className="text-gray-600 text-sm">Expires in: {ingredient.expiry}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPlans = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Meal Plans</h2>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Plan
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mealPlans.map((plan) => (
            <div key={plan.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {plan.image}
              </div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">{plan.name}</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center justify-between">
                  <span>Meals</span>
                  <span className="font-semibold">{plan.meals}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg Calories</span>
                  <span className="font-semibold">{plan.calories}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Prep Time</span>
                  <span className="font-semibold">{plan.time}</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFavorites = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Favourites</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">{favorites.length} recipes</span>
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {recipe.image}
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">{recipe.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{recipe.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{recipe.time}</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-pink-600 to-red-600 text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                Cook Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'profile':
        return renderProfile();
      case 'ingredients':
        return renderIngredients();
      case 'plans':
        return renderPlans();
      case 'favorites':
        return renderFavorites();
      default:
        return renderDashboard();
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