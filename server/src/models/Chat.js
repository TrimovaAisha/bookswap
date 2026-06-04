const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      default: "Все жанры приветствуются",
    },

    gender: {
      type: String,
      default: "Для всех",
    },

    ageRange: {
      type: String,
    },

    city: {
      type: String,
    },

    messages: [
      {
        sender: String,
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);