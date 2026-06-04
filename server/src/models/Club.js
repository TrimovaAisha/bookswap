const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      default: "Для всех",
    },

    ageRange: {
      type: String,
      default: "",
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Club", clubSchema);