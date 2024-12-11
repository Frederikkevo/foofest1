import { useEffect, useState } from "react";

const ReservationTimer = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeout]);

  return (
    <div>
      <h3 className="text-lg">Time left: {timeLeft}s</h3>
    </div>
  );
};

export default ReservationTimer;
