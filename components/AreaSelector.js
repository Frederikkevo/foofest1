"use client";

import { useState } from "react";

const AreaSelector = ({ onSelect }) => {
  const [area, setArea] = useState("");
  const [amount, setAmount] = useState(1);

  const handleSubmit = () => {
    onSelect(area, amount);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Select Area & Tickets</h2>
      <input
        type="text"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        placeholder="Area Name"
        className="border p-2 m-2"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min={1}
        className="border p-2 m-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Reserve
      </button>
    </div>
  );
};

export default AreaSelector;
