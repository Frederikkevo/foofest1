const API_BASE_URL = 'https://hill-mirror-era.glitch.me';

export const fetchAvailableSpots = async () => {
  const response = await fetch(`${API_BASE_URL}/available-spots`);
  if (!response.ok) throw new Error('Failed to fetch available spots');
  return response.json();
};

export const reserveSpot = async (area, amount) => {
  const response = await fetch(`${API_BASE_URL}/reserve-spot`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ area, amount }),
  });
  if (!response.ok) throw new Error('Failed to reserve spot');
  return response.json();
};

export const fulfillReservation = async (id) => {
  const response = await fetch(`${API_BASE_URL}/fullfill-reservation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) throw new Error('Failed to fulfill reservation');
  return response.json();
};
