import React, { useState, useEffect } from "react";
import { fetchAdsbookPageData, type SalesPages } from "../types/ads";

const Adsbook: React.FC = () => {
  const [data, setData] = useState<SalesPages | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdsbookPageData()
      .then((data) => {
        setData(data);
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
          {data?.header_line_before || "CONGRATULATIONS, YOU ARE QUALIFIED."}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
          {data?.header_title ||
            "YOUR LAST STEP IS TO BOOK A CALL WITH OUR TEAM"}
        </h2>

        <div className="mb-6">
          <h3 className="font-bold mb-3 text-lg">
            {data?.header_subtitle || "Before You Book"}
          </h3>
          <div className="text-gray-300" style={{ whiteSpace: "pre-line" }}>
            {data?.header_description || ""}
          </div>
        </div>

        <div className="bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="text-gray-300" style={{ whiteSpace: "pre-line" }}>
            {data?.header_line_after_button ||
              "Please only book if you're 100% sure you can attend."}
          </p>
        </div>

        {data?.header_video?.video_url && (
          <div className="mb-8">
            <iframe
              src={data.header_video.video_url}
              width="100%"
              height="500"
              frameBorder="0"
              className="rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {data?.card_sections_heading || "Testimonials"}
        </h2>
        <div className="space-y-6">
          {data?.card_sections?.items?.map((card: any, idx: number) => (
            <div key={idx} className="border border-gray-700 rounded-2xl p-6">
              {card.card_image && (
                <div className="flex justify-center mb-4">
                  <img
                    src={`https://esign-admin.signmary.com${card.card_image.url}`}
                    alt={card.card_image.title}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
              )}
              <p className="text-blue-400 text-3xl font-serif mb-2 text-center">
                {card.subtitle}
              </p>
              <p
                className="text-gray-300 text-sm mb-2 text-center"
                style={{ whiteSpace: "pre-line" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adsbook;
