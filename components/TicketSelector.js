"use client";

import React, { useState } from "react";

const TicketSelector = ({ onAddToCart }) => {
  const [regular, setRegular] = useState(0);
  const [vip, setVip] = useState(0);

  const handleAddTickets = () => {
    if (regular > 0 || vip > 0) {
      onAddToCart({ type: "Tickets", regular, vip, price: regular * 799 + vip * 1299 });
      setRegular(0);
      setVip(0);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Select Tickets</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label>Regular Tickets (799,-)</label>
          <input
            type="number"
            value={regular}
            onChange={(e) => setRegular(parseInt(e.target.value) || 0)}
            className="w-20 border rounded px-2 py-1"
          />
        </div>
        <div className="flex items-center justify-between">
          <label>VIP Tickets (1299,-)</label>
          <input
            type="number"
            value={vip}
            onChange={(e) => setVip(parseInt(e.target.value) || 0)}
            className="w-20 border rounded px-2 py-1"
          />
        </div>
        <button
          onClick={handleAddTickets}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TicketSelector;
