import React from 'react';

const PaymentSectionPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Payment Information</h1>
        
        <form>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-medium mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="cvv" className="block text-gray-700 text-sm font-medium mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="cardName" className="block text-gray-700 text-sm font-medium mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardName"
              placeholder="Midhun"
              className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentSectionPage;
