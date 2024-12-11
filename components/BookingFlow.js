"use client";

import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import ReservationTimer from "./ReservationTimer";
import { getAvailableSpots, reserveSpot, fullfillReservation } from "../api/apiClient";

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [availableSpots, setAvailableSpots] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [tickets, setTickets] = useState(1);
  const [ticketType, setTicketType] = useState("regular");
  const [options, setOptions] = useState({
    greenCamping: false,
    tent2Person: 0,
    tent3Person: 0,
  });
  const [reservationId, setReservationId] = useState(null);
  const [personalInfo, setPersonalInfo] = useState([]);
  const [timeout, setTimeout] = useState(false);

  const ticketPrices = {
    regular: 799,
    vip: 1299,
  };

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const spots = await getAvailableSpots();
        setAvailableSpots(spots);
      } catch (error) {
        console.error("Failed to fetch available spots");
      }
    };
    fetchSpots();
  }, []);

  const handleReserve = async () => {
    try {
      const response = await reserveSpot({ area: selectedArea, amount: tickets });
      setReservationId(response.id);
      setStep(2);
    } catch (error) {
      console.error("Error reserving spot");
    }
  };

  const handleFullfill = async () => {
    try {
      await fullfillReservation(reservationId);
      alert("Reservation completed!");
      setStep(1);
    } catch (error) {
      console.error("Error fulfilling reservation");
    }
  };

  const handleTimeout = () => {
    alert("Reservation timed out!");
    setTimeout(true);
    setStep(1);
  };

  const calculateTotalPrice = () => {
    const ticketPrice = tickets * ticketPrices[ticketType];
    const greenCampingPrice = options.greenCamping ? 249 : 0;
    const tentPrice =
      options.tent2Person * 299 + options.tent3Person * 399;
    return ticketPrice + greenCampingPrice + tentPrice + 99; // Fixed booking fee
  };

  return (
    <div>
      <ProgressBar step={step} totalSteps={4} />

      {timeout ? (
        <div className="text-red-500">Session expired. Please restart.</div>
      ) : (
        <>
          {step === 1 && (
            <div>
              <h2>Select Area and Tickets</h2>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="">Select an area</option>
                {availableSpots.map((spot) => (
                  <option key={spot.id} value={spot.area}>
                    {spot.area} ({spot.spotsLeft} spots left)
                  </option>
                ))}
              </select>
              <div>
                <label>
                  <input
                    type="radio"
                    value="regular"
                    checked={ticketType === "regular"}
                    onChange={(e) => setTicketType(e.target.value)}
                  />
                  Regular Ticket (799,-)
                </label>
                <label>
                  <input
                    type="radio"
                    value="vip"
                    checked={ticketType === "vip"}
                    onChange={(e) => setTicketType(e.target.value)}
                  />
                  VIP Ticket (1299,-)
                </label>
              </div>
              <input
                type="number"
                value={tickets}
                onChange={(e) => setTickets(Number(e.target.value))}
                min={1}
              />
              <button onClick={handleReserve}>Reserve Spot</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2>Enter Personal Info</h2>
              {Array.from({ length: tickets }).map((_, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`Name for Ticket ${index + 1}`}
                    onChange={(e) =>
                      setPersonalInfo((prev) => {
                        const info = [...prev];
                        info[index] = e.target.value;
                        return info;
                      })
                    }
                  />
                </div>
              ))}
              <button onClick={() => setStep(3)}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2>Confirm and Pay</h2>
              <ReservationTimer duration={300} onTimeout={handleTimeout} />
              <p>Total Price: {calculateTotalPrice()} DKK</p>
              <button onClick={handleFullfill}>Pay and Confirm</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookingFlow;
