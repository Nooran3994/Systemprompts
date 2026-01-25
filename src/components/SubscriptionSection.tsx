import React, { useState } from 'react';
import { Bell } from 'lucide-react';

export function SubscriptionSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for subscription logic
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#007BFF]/10 rounded-full mb-6">
            <Bell className="w-8 h-8 text-[#007BFF]" />
          </div>

          {/* Title */}
          <h2
            className="text-[#343A40] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Stay Updated with New Prompts
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know when we release new system prompts, 
            updates, and exclusive content.
          </p>

          {/* Form */}
          {subscribed ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 text-green-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Successfully subscribed! Check your email.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all"
                  aria-label="Email address for subscription"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-all shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
