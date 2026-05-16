import axios from "axios"

const API =
  `${import.meta.env.VITE_API_URL}/projects`

export const getProjects =
  async () => {
    const response = await axios.get(API)

    return response.data
  }