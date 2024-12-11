"use client";
import { useState } from "react";
import AvailabilityChecker from "../../components/AvailabilityChecker";
import AreaSelector from "../../components/AreaSelector";
import ReservationTimer from "../../components/ReservationTimer";


const Home = () => {
  const [reservation, setReservation] = useState(null);
  const [timerActive, setTimerActive] = useState(false);

  const handleAreaSelect = async (area, amount) => {
    const response = await putReservation({ area, amount });
    setReservation(response);
    setTimerActive(true);
  };

  const handleTimeout = () => {
    setReservation(null);
    setTimerActive(false);
    alert("Reservation timed out!");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">Foofest Booking</h1>
      <AvailabilityChecker />
      <AreaSelector onSelect={handleAreaSelect} />
      {reservation && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Reservation Details</h2>
          <p>Area: {reservation.area}</p>
          <p>Tickets: {reservation.amount}</p>
          {timerActive && <ReservationTimer duration={300} onTimeout={handleTimeout} />}
        </div>
      )}
    </div>
  );
};

export default Home;
