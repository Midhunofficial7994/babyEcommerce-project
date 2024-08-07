import React from "react";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
          Our Story
        </h1>
        <p className="text-gray-700 mb-6">
          Our journey began with a simple vision to create quality products and
          provide exceptional service. Over the years, we have evolved, grown,
          and continually refined our craft to meet the needs of our customers.
        </p>
        <p className="text-gray-700 mb-6">
          Our mission is to deliver excellence through innovation and
          dedication. We are committed to creating lasting relationships with
          our clients and offering top-notch solutions.
        </p>
        <div className="flex flex-wrap mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">1998</h3>
              <p className="mt-2">Time for course of mass construction</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">2002</h3>
              <p className="mt-2">
                Foundation of dignified purity in imperdient
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">2009</h3>
              <p className="mt-2">Development of advanced provisions</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">2017</h3>
              <p className="mt-2">Rhoncus continues to expand</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
      <Footer />
      </>
  );
};

export default AboutPage;
