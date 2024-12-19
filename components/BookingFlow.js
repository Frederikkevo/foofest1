"use client";

import React, { useState, useEffect } from 'react';
import TicketSelector from './TicketSelector';
import CampingOptions from './CampingOptions';
import PersonalInfoForm from './PersonalInfoForm';

const BookingFlow = () => {
  const [tickets, setTickets] = useState({ regular: 0, vip: 0 });
  const [campingOption, setCampingOption] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    // Initialization or fetching operations here
  }, []);

  const handleTicketsUpdate = (newTickets) => {
    setTickets(newTickets);
  };

  const handleCampingOptionChange = (option, price) => {
    setCampingOption({ ...campingOption, [option]: price });
  };

  const handlePersonalInfoSubmit = (info) => {
    setPersonalInfo(info);
  };

  const handleReservation = async () => {
    const response = await fetch('https://hill-mirror-era.glitch.me/reserve-spot', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ area: 'Alfheim', amount: tickets.regular + tickets.vip }),
    });
    const data = await response.json();
    console.log(data); // Log to check the reservation ID and status
  };

  return (
    <div className="booking-flow">
      <TicketSelector updateTickets={handleTicketsUpdate} />
      <CampingOptions onCampingOptionChange={handleCampingOptionChange} />
      <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />
      <button onClick={handleReservation}>Reserve Spot</button>
    </div>
  );
};

export default BookingFlow;
