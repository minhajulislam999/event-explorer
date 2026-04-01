import React from 'react'

const testimonials = [
  {
    id: 1,
    name: "Rahul Ahmed",
    photo: "https://i.pravatar.cc/100?img=1",
    review: "Event Explorer helped me find the best tech conference in Dhaka. Absolutely amazing experience!",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Khan",
    photo: "https://i.pravatar.cc/100?img=2",
    review: "I discovered a wonderful art exhibition through this platform. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Karim Hossain",
    photo: "https://i.pravatar.cc/100?img=3",
    review: "The seat reservation process was so smooth and easy. Will use again!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <div className="flex gap-1">
                    {Array(t.rating).fill("⭐").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm">{t.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;