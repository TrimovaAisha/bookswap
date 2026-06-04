const express = require("express");
const Chat = require("../models/Chat");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const chat = await Chat.create(req.body);

    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const chats = await Chat.find().sort({
      createdAt: -1,
    });

    res.json(chats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      return res.status(404).json({
        message: "Chat not found",
      });
    }
    res.json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/:id/message", async (req, res) => {
  try {
    const { sender, text } = req.body;

    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      return res.status(404).json({
        message: "Chat not found",
      });
    }

    chat.messages.push({
      sender,
      text,
    });

    await chat.save();

    res.json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;