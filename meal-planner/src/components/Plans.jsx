import React from 'react';
import { Plus } from 'lucide-react';

const Plans = () => {
  const mealPlans = [
    { id: 1, name: 'Mediterranean Week', meals: 21, calories: 1800, time: '30 min', image: '🥗' },
    { id: 2, name: 'High Protein', meals: 14, calories: 2200, time: '45 min', image: '🥩' },
    { id: 3, name: 'Vegetarian Delight', meals: 18, calories: 1600, time: '25 min', image: '🥕' },
  ];

  return (
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
};

export default Plans;