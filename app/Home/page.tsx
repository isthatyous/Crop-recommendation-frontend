"use client"
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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
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
      setRecommendedCrops('Error: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Put your input data here :</h1>
        
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" onSubmit={handleSubmit}>
          {/* Input 1 */}
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

          {/* Input 2 */}
          <div className="flex flex-col">
            <label htmlFor="P" className="text-lg font-semibold text-gray-700 mb-2"> Phosphorous </label>
            <input
              type="number"
              id="P"
              value={formData.P}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input 3 */}
          <div className="flex flex-col">
            <label htmlFor="K" className="text-lg font-semibold text-gray-700 mb-2"> Potassium </label>
            <input
              type="number"
              id="K"
              value={formData.K}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input 4 */}
          <div className="flex flex-col">
            <label htmlFor="temperature" className="text-lg font-semibold text-gray-700 mb-2">Temperature </label>
            <input
              type="number"
              id="temperature"
              value={formData.temperature}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input 5 */}
          <div className="flex flex-col">
            <label htmlFor="humidity" className="text-lg font-semibold text-gray-700 mb-2">Humidity </label>
            <input
              type="number"
              id="humidity"
              value={formData.humidity}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input 6 */}
          <div className="flex flex-col">
            <label htmlFor="ph" className="text-lg font-semibold text-gray-700 mb-2">PH</label>
            <input
              type="number"
              id="ph"
              value={formData.ph}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input 7 */}
          <div className="flex flex-col">
            <label htmlFor="rainfall" className="text-lg font-semibold text-gray-700 mb-2">Rainfall</label>
            <input
              type="number"
              id="rainfall"
              value={formData.rainfall}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
