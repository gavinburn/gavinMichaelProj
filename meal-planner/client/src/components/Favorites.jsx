import React from 'react';
import { Heart, Star, Clock } from 'lucide-react';

const Favorites = () => {
  const favorites = [
    { id: 1, name: 'Grilled Salmon', rating: 4.8, time: '20 min', image: '🐟' },
    { id: 2, name: 'Quinoa Buddha Bowl', rating: 4.9, time: '15 min', image: '🥙' },
    { id: 3, name: 'Chicken Teriyaki', rating: 4.7, time: '35 min', image: '🍗' },
  ];

  return (
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
};

export default Favorites;