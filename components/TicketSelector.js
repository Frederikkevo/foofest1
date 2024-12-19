"use client";

import React, { useState } from 'react';

const TicketSelector = ({ updateTickets }) => {
  const [regular, setRegular] = useState(0);
  const [vip, setVip] = useState(0);

  const handleRegularChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    setRegular(count);
    updateTickets({ regular: count, vip });
  };

  const handleVipChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    setVip(count);
    updateTickets({ regular, vip: count });
  };

  return (
    <div className="ticket-selector">
      <label>
        Regular Tickets @ 799,- each:
        <input type="number" value={regular} onChange={handleRegularChange} />
      </label>
      <label>
        VIP Tickets @ 1299,- each:
        <input type="number" value={vip} onChange={handleVipChange} />
      </label>
    </div>
  );
};

export default TicketSelector;
