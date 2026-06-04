const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    condition: {
      type: String,
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Advertisement",
  advertisementSchema
);