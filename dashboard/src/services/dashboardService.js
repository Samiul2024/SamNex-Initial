import axios from "axios"

const API =
  `${import.meta.env.VITE_API_URL}/dashboard`

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