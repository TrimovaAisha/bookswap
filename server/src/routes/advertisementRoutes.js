const express = require("express");
const Advertisement = require("../models/Advertisement");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/my", auth, async (req, res) => {
  try {
    const ads = await Advertisement.find({
      owner: req.userId,
    });

    res.json(ads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const ad = await Advertisement.create({
      ...req.body,
      owner: req.userId,
    });

    res.status(201).json(ad);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await Advertisement.findOneAndDelete({
      _id: req.params.id,
      owner: req.userId,
    });

    res.json({
      message: "Объявление удалено",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;