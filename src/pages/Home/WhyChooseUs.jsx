import React from 'react'

const reasons = [
  {
    id: 1,
    icon: "🎯",
    title: "Discover Local Events",
    description: "Find the best events happening near you, from tech conferences to art exhibitions.",
  },
  {
    id: 2,
    icon: "🔒",
    title: "Secure Booking",
    description: "Your seat reservations are safe and secure with our trusted platform.",
  },
  {
    id: 3,
    icon: "📱",
    title: "Easy to Use",
    description: "Our platform is designed to be simple and intuitive for everyone.",
  },
  {
    id: 4,
    icon: "🌟",
    title: "Top Quality Events",
    description: "We curate only the best events to ensure you have an amazing experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-base-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div key={reason.id} className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <span className="text-5xl">{reason.icon}</span>
                <h3 className="card-title text-lg">{reason.title}</h3>
                <p className="text-sm text-gray-500">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
