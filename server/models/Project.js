import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    technologies: [
      {
        type: String,
      },
    ],

    liveLink: {
      type: String,
    },

    githubLink: {
      type: String,
    },

    thumbnail: {
      type: String,
      default:
        "https://placehold.co/600x400",
    },

    status: {
      type: String,
      enum: [
        "planning",
        "in_progress",
        "completed",
      ],
      default: "planning",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Project = mongoose.model(
  "Project",
  projectSchema
)

export default Project