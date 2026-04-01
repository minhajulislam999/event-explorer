import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-primary text-primary-content py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="text-lg mb-8">Subscribe to our newsletter and never miss an upcoming event near you.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-bordered w-full sm:w-96 text-black"
          />
          <button className="btn btn-secondary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;