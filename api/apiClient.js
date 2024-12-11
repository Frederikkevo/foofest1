import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://daviatkea.github.io/Foofest-Exam-API-Docs/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAvailability = async () => {
  const response = await apiClient.get("/availability");
  return response.data;
};

export const putReservation = async (data) => {
  const response = await apiClient.put("/reservation", data);
  return response.data;
};

export default apiClient;
