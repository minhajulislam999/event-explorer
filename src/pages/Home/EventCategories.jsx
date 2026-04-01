import React from 'react'

const categories = [
  { id: 1, name: "Tech", icon: "💻", count: 2 },
  { id: 2, name: "Art", icon: "🎨", count: 1 },
  { id: 3, name: "Sports", icon: "🏏", count: 1 },
  { id: 4, name: "Music", icon: "🎵", count: 1 },
  { id: 5, name: "Food", icon: "🍔", count: 1 },
];

const EventCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="card bg-base-200 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            <div className="card-body items-center text-center py-6">
              <span className="text-4xl">{cat.icon}</span>
              <h3 className="font-bold text-lg">{cat.name}</h3>
              <p className="text-sm">{cat.count} Events</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategories;