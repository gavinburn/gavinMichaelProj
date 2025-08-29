import { Calendar, Package, Heart, Zap, Clock, Star } from 'lucide-react';

const Dashboard = () => {
  const mealPlans = [
    { id: 1, name: 'Mediterranean Week', meals: 21, calories: 1800, time: '30 min', image: '🥗' },
    { id: 2, name: 'High Protein', meals: 14, calories: 2200, time: '45 min', image: '🥩' },
    { id: 3, name: 'Vegetarian Delight', meals: 18, calories: 1600, time: '25 min', image: '🥕' },
  ];



  return (
    <div>
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-xl text-white/90 mb-6">Ready to plan some delicious meals?</p>
          <div className="flex items-center justify-center gap-4">
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
};

export default Dashboard;