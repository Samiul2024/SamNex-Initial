import axios from "axios"

const API =
  "http://localhost:5000/api/dashboard"

export const getDashboardStats =
  async (token) => {
    const response = await axios.get(
      `${API}/stats`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return response.data
  }