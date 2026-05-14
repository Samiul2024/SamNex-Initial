import axios from "axios"

const API =
  "http://localhost:5000/api/bookings"

export const getBookings =
  async (token) => {
    const response = await axios.get(API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  }