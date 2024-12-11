"use client";

import { useEffect, useState } from "react";
import { getAvailability } from "../api/apiClient";

const AvailabilityChecker = () => {
  const [availability, setAvailability] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const data = await getAvailability();
        setAvailability(data);
      } catch (err) {
        setError("Failed to fetch availability.");
      }
    };

    fetchAvailability();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">Available Areas</h2>
      <ul>
        {availability.map((area) => (
          <li key={area.id}>
            {area.name}: {area.availableTickets} tickets available
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailabilityChecker;
