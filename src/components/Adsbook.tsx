import React, { useState, useEffect } from "react";
import { fetchAdsbookPageData, type SalesPages } from "../types/ads";

const Adsbook: React.FC = () => {
  const [_, setWorkbookData] = useState<SalesPages | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdsbookPageData()
      .then((data) => {
        setWorkbookData(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Congratulations Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          CONGRATULATIONS, YOU ARE QUALIFIED.
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
          YOUR LAST STEP IS TO BOOK A CALL WITH OUR TEAM
        </h2>

        <div className="mb-6">
          <h3 className="font-bold mb-3 text-lg">Before You Book</h3>
          <p className="text-gray-300 mb-3">
            This 30-minute Zoom{" "}
            <span className="font-semibold">STRATEGY SESSION</span> with us is
            in high-demand.
          </p>
          <p className="text-gray-300 mb-3">
            So please make sure you can participate live (or grow your business)
            on the call. Please be ready for us to make notes, ask questions and
            leave the call with a clearer digital marketing plan in place.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-3 text-lg">What we'll cover</h3>
          <p className="text-gray-300">
            We'll show you how our system can scale to 1k, 10k or 100k per month
            in sales and get you a clear roadmap for YOUR business.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-3 text-lg">Who's great for</h3>
          <p className="text-gray-300">
            Any business owner who wants to scale rapidly and consistently
            without wasting thousands and thousands and make your marketing work
            for you.
          </p>
        </div>

        <div className="bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="font-bold mb-2">
            Please only book if you're 100% sure you can attend.
          </p>
          <p className="text-gray-300">
            We reserve calls for business owners and are serious about growth.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden">
          <iframe
            src="https://calendly.com/YOUR_CALENDLY_USERNAME/30min"
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-lg"
          ></iframe>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          * Replace YOUR_CALENDLY_USERNAME with your actual Calendly username
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-2xl mx-auto px-4 pb-8">
        <div className="space-y-6">
          {/* Testimonial 1 */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👥
                </div>
              </div>
            </div>
            <p className="text-blue-400 text-3xl font-serif mb-2 text-center">
              Revenue
            </p>
            <h3 className="text-3xl font-bold mb-4 text-center">
              $400,000+ PER MONTH
            </h3>
            <p className="text-gray-300 text-sm mb-2 text-center">
              "Some wins and improvements I have made: Time management has
              improved, a big plus for business and life. Closing leads, I am
              closing more leads into clients than before I started. Marketing,
              from no direction to become one of my favourite things."
            </p>
            <p className="text-right text-lg">-Adam</p>
          </div>

          {/* Testimonial 2 */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨👩👧
                </div>
              </div>
            </div>
            <p className="text-blue-400 text-3xl font-serif mb-2 text-center">
              Revenue
            </p>
            <h3 className="text-3xl font-bold mb-4 text-center">
              $120,000+ PER MONTH
            </h3>
            <p className="text-gray-300 text-sm mb-2 text-center">
              "I have added an additional 600k recurring revenue which is easily
              a 30x ROI in just 14 months. The key to getting where you want to
              go is not working harder. It is finding someone who has done it
              before and learning everything they can teach you."
            </p>
            <p className="text-right text-lg">-Rick</p>
          </div>

          {/* Testimonial 3 */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨👧
                </div>
              </div>
            </div>
            <p className="text-blue-400 text-3xl font-serif mb-2 text-center">
              Revenue
            </p>
            <h3 className="text-3xl font-bold mb-4 text-center">
              $100,000+ PER MONTH
            </h3>
            <p className="text-gray-300 text-sm mb-2 text-center">
              "The investment that you're going to make to join compared to what
              you make back is such a no brainer... You get everyone's best
              practices which saves you so much time and energy. You would have
              to be crazy to turn it down. Jump into it"
            </p>
            <p className="text-right text-lg">-Jacob</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adsbook;
