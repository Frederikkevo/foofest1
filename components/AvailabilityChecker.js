import { useEffect, useState } from "react";
import { getAvailability } from "../api/apiClient";

const AvailabilityChecker = () => {
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      const data = await getAvailability();
      setAvailability(data);
    };
    fetchAvailability();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Available Areas</h2>
      <ul>
        {availability.map((area) => (
          <li key={area.id}>
            {area.name}: {area.availableTickets} tickets
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailabilityChecker;
