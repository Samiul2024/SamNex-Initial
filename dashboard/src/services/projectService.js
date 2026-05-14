import axios from "axios"

const API =
  "http://localhost:5000/api/projects"

export const getProjects =
  async () => {
    const response = await axios.get(API)

    return response.data
  }

export const createProject =
  async (data, token) => {
    const response = await axios.post(
      API,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return response.data
  }

export const updateProjectStatus =
  async (
    id,
    status,
    token
  ) => {
    const response = await axios.put(
      `${API}/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return response.data
  }