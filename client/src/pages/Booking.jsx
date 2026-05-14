import { useState } from "react"

import toast from "react-hot-toast"

import { createBooking } from "../services/bookingService"

const Booking = () => {
  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
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
      await createBooking(formData)

      toast.success(
        "Booking submitted successfully"
      )

      setFormData({
        fullName: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      })
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-secondary p-10">
          <h1 className="mb-8 text-5xl font-black">
            Book A Project
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
            />

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
            >
              <option value="">
                Select Project Type
              </option>

              <option>
                MERN Web Application
              </option>

              <option>
                SaaS Platform
              </option>

              <option>
                Admin Dashboard
              </option>

              <option>
                AI Integration
              </option>
            </select>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
            >
              <option value="">
                Select Budget
              </option>

              <option>$500 - $1000</option>

              <option>$1000 - $3000</option>

              <option>$3000+</option>
            </select>

            <textarea
              rows="6"
              name="message"
              placeholder="Project Details"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
            />

            <button className="w-full rounded-xl bg-primary p-4 font-bold">
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking