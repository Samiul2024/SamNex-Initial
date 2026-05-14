import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    projectType: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "contacted",
        "in_progress",
        "completed",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
)

const Booking = mongoose.model(
  "Booking",
  bookingSchema
)

export default Booking