import axios from "axios"

const API =
  "http://localhost:5000/api/bookings"

export const createBooking =
  async (formData) => {
    const response = await axios.post(
      API,
      formData
    )

    return response.data
  }