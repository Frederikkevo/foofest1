import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://daviatkea.github.io/FooFest-Exam-API",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAvailableSpots = async () => {
  try {
    const response = await apiClient.get("/available-spots");
    return response.data;
  } catch (error) {
    console.error("Error fetching available spots:", error);
    throw error;
  }
};

export const reserveSpot = async (data) => {
  try {
    const response = await apiClient.put("/reserve-spot", data);
    return response.data;
  } catch (error) {
    console.error("Error reserving spot:", error);
    throw error;
  }
};

export const fullfillReservation = async (id) => {
  try {
    const response = await apiClient.post("/fullfill-reservation", { id });
    return response.data;
  } catch (error) {
    console.error("Error fulfilling reservation:", error);
    throw error;
  }
};

export default apiClient;
