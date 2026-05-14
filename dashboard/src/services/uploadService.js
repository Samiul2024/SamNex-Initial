import axios from "axios"

const API =
  "http://localhost:5000/api/upload"

export const uploadImage =
  async (file, token) => {
    const formData = new FormData()

    formData.append("image", file)

    const response = await axios.post(
      API,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return response.data
  }