"use client";  // Add this line at the top of your file

import React, { useState } from 'react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });

  const [recommendedCrops, setRecommendedCrops] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        N: parseFloat(formData.N),
        P: parseFloat(formData.P),
        K: parseFloat(formData.K),
        temperature: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
      };

      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

      if (responseData.recommended_crop) {
        setRecommendedCrops(responseData.recommended_crop);
      } else {
        setRecommendedCrops('Error: ' + (responseData.error || 'Unknown error'));
      }
    } catch (error) {
      if (error instanceof Error) {
        setRecommendedCrops('Error: ' + error.message);
      } else {
        setRecommendedCrops('Error: Unknown error');
      }
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Put your input data here :</h1>

        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" onSubmit={handleSubmit}>
          {/* Input Fields */}
          <div className="flex flex-col">
            <label htmlFor="N" className="text-lg font-semibold text-gray-700 mb-2"> Nitrogen </label>
            <input
              type="number"
              id="N"
              value={formData.N}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Repeat for other fields... */}

          {/* Submit Button */}
          <div className="col-span-4 text-center">
            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Recommend
            </button>
          </div>
        </form>
        
      </div>

      {/* Recommended Crops Card */}
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Recommended Crops</h2>

        <input
          type="text"
          value={recommendedCrops}
          readOnly
          className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
          placeholder="Recommended crops will appear here"
        />
      </div>
    </div>
  );
}
