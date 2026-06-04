const express = require("express");
const Club = require("../models/Club");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { city, genre, search } = req.query;

    const filter = {};

    if (city && city !== "Все города") {
      filter.city = city;
    }

    if (genre && genre !== "Все жанры") {
      filter.genre = genre;
    }

    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    const clubs = await Club.find(filter);

    res.json(clubs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;