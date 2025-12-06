import React, { useState, useEffect } from "react";
import { fetchLandingPageData } from "../types/ads";
import Adsbook from "./Adsbook";

type BusinessType = "gym" | "local" | "fitness" | "agency" | "coach" | "";

interface FormData {
  businessType: BusinessType;
  name: string;
  phone: string;
  email: string;
}

const Ads: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessType: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    fetchLandingPageData();
  }, []);

  const handleBusinessTypeChange = (type: BusinessType) => {
    setFormData({ ...formData, businessType: type });
  };

  const handleNext = () => {
    if (step === 1 && formData.businessType) {
      setStep(2);
    } else if (step === 2 && formData.name) {
      setStep(3);
    } else if (step === 3 && formData.phone) {
      setStep(4);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (formData.email) {
      setStep(5);
    }
  };

  if (step === 5) {
    return <Adsbook />;
  }

  if (false) {
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
              <span className="font-semibold">STRATEGY SESSION</span> with us
              is in high-demand.
            </p>
            <p className="text-gray-300 mb-3">
              So please make sure you can participate live (or grow your
              business) on the call. Please be ready for us to make notes, ask
              questions and leave the call with a clearer digital marketing
              plan in place.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-3 text-lg">What we'll cover</h3>
            <p className="text-gray-300">
              We'll show you how our system can scale to 1k, 10k or 100k per
              month in sales and get you a clear roadmap for YOUR business.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-3 text-lg">Who's great for</h3>
            <p className="text-gray-300">
              Any business owner who wants to scale rapidly and consistently
              without wasting thousands and thousands and make your marketing
              work for you.
            </p>
          </div>

          <div className="bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-8">
            <p className="font-bold mb-2">
              Please only book if you're 100% sure you can attend.
            </p>
            <p className="text-gray-300">
              We reserve calls for business owners and are serious about
              growth.
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
            * Replace YOUR_CALENDLY_USERNAME with your actual Calendly
            username
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
                closing more leads into clients than before I started.
                Marketing, from no direction to become one of my favourite
                things."
              </p>
              <p className="text-right text-lg">-Adam</p>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-gray-700 rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    👨‍👩‍👧
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
                "I have added an additional 600k recurring revenue which is
                easily a 30x ROI in just 14 months. The key to getting where you
                want to go is not working harder. It is finding someone who has
                done it before and learning everything they can teach you."
              </p>
              <p className="text-right text-lg">-Rick</p>
            </div>

            {/* Testimonial 3 */}
            <div className="border border-gray-700 rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    👨‍👧
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
                "The investment that you're going to make to join compared to
                what you make back is such a no brainer... You get everyone's
                best practices which saves you so much time and energy. You
                would have to be crazy to turn it down. Jump into it"
              </p>
              <p className="text-right text-lg">-Jacob</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="bg-white text-black text-center py-3 px-4">
        <p className="text-sm md:text-base font-semibold">
          We help business owners doing $10k-$400k+ month get high-quality leads
          via FB/IG ads.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          {step === 1 && (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Most agencies charge $1K–$6K/month for average results.
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                  We run proven Facebook & Instagram ads for $100/week that
                  bring high-quality leads.
                </h2>
                <p className="text-lg mb-2">
                  Step 1: Enter your details below.
                </p>
                <p className="text-lg">Step 2: Book a 30-min clarity call.</p>
              </div>

              <div className="bg-white text-black rounded-lg p-8 max-w-2xl mx-auto">
                <p className="mb-4 font-semibold">
                  What type of business do you own? (We don't work with Ecom) *
                </p>

                <div className="space-y-3">
                  {[
                    { value: "gym", label: "Gym Owner" },
                    { value: "local", label: "Local Service Based Business" },
                    { value: "fitness", label: "Online Fitness Coach" },
                    { value: "agency", label: "Digital Agency Owner" },
                    { value: "coach", label: "Online Business Coach" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                      <input
                        type="radio"
                        name="businessType"
                        value={option.value}
                        checked={formData.businessType === option.value}
                        onChange={() =>
                          handleBusinessTypeChange(option.value as BusinessType)
                        }
                        className="w-4 h-4"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={!formData.businessType}
                  className="w-full mt-6 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  NEXT →
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <div className="bg-white text-black rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-xl font-bold mb-2">You're qualified.</h2>
              <p className="mb-6">
                Add your details below and book your free demo call on the next
                page.
              </p>

              <label className="block mb-2 font-semibold">Your name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="tester test"
                className="w-full border border-gray-300 rounded px-4 py-3 mb-6 focus:outline-none focus:border-blue-500"
              />

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="flex-1 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
                >
                  ← PREV
                </button>
                <button
                  onClick={handleNext}
                  disabled={!formData.name}
                  className="flex-1 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  NEXT →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white text-black rounded-lg p-8 max-w-2xl mx-auto">
              <label className="block mb-2 font-semibold">
                Mobile Number *
              </label>
              <div className="flex items-center border border-gray-300 rounded mb-6 overflow-hidden">
                <div className="bg-gray-100 px-3 py-3 flex items-center gap-2 border-r border-gray-300">
                  <span className="text-xl">🇵🇰</span>
                  <span>+</span>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="(0786) 786 786 786"
                  className="flex-1 px-4 py-3 focus:outline-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="flex-1 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
                >
                  ← PREV
                </button>
                <button
                  onClick={handleNext}
                  disabled={!formData.phone}
                  className="flex-1 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  NEXT →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="bg-white text-black rounded-lg p-8 max-w-2xl mx-auto">
              <label className="block mb-2 font-semibold">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="test@gmail.com"
                className="w-full border border-gray-300 rounded px-4 py-3 mb-6 focus:outline-none focus:border-blue-500"
              />

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="flex-1 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
                >
                  ← PREV
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.email}
                  className="flex-1 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          )}

          {/* Testimonial at bottom for steps 1-4 */}
          {step <= 4 && (
            <div className="mt-12 max-w-md mx-auto">
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
                  improved, a big plus for business and life. Closing leads, I
                  am closing more leads into clients than before I started.
                  Marketing, from no direction to become one of my favourite
                  things."
                </p>
                <p className="text-right text-lg">-Adam</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ads;
