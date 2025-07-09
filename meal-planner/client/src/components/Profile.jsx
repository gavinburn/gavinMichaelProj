import React from 'react';

const Profile = () => {
  return (
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
};

export default Profile;