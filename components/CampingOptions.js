"use client";

import React from "react";

const CampingOptions = ({ onAddToCart, setCampingFee }) => {
  const options = [
    { name: "Green Camping", price: 249 },
    { name: "2 Person Tent", price: 299 },
    { name: "3 Person Tent", price: 399 },
  ];

  const handleAddOption = (option) => {
    onAddToCart({ type: "Camping", name: option.name, price: option.price });
    setCampingFee(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Select Camping Options</h2>
      <p className="mb-4">Fixed Booking Fee: 99,- (Only once per booking)</p>
      {options.map((option) => (
        <div key={option.name} className="flex items-center justify-between mb-2">
          <label>{option.name} ({option.price},-)</label>
          <button
            onClick={() => handleAddOption(option)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default CampingOptions;
