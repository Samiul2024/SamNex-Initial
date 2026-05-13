import { useState } from "react"

import { useNavigate } from "react-router-dom"

import toast from "react-hot-toast"

import { login } from "../../services/authService"

import { useAuth } from "../../context/AuthContext"

const Login = () => {
  const navigate = useNavigate()

  const { setAdmin } = useAuth()

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await login(formData)

      localStorage.setItem(
        "admin",
        JSON.stringify(data)
      )

      setAdmin(data)

      toast.success("Login successful")

      navigate("/")
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed"
      )
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-secondary p-8"
      >
        <h1 className="mb-8 text-center text-4xl font-black">
          Admin Login
        </h1>

        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />
        </div>

        <button className="w-full rounded-xl bg-primary p-4 font-bold">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login