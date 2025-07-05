import React from 'react';
import { Plus, Search } from 'lucide-react';

const Ingredients = () => {
  const ingredients = [
    { id: 1, name: 'Salmon Fillets', amount: '4 pieces', expiry: '2 days', status: 'fresh' },
    { id: 2, name: 'Quinoa', amount: '500g', expiry: '30 days', status: 'good' },
    { id: 3, name: 'Spinach', amount: '200g', expiry: '1 day', status: 'expiring' },
    { id: 4, name: 'Chicken Breast', amount: '1kg', expiry: '5 days', status: 'fresh' },
  ];

  return (
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
};

export default Ingredients;